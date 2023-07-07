import { fetchData } from "./base";
import axios, { formToJSON } from "axios";

// show proposes on header
async function handleProposes() {
    const searchBar = document.getElementById("search-bar");
    const response = await fetchData("http://localhost:8080/API/proposedItems");
    const { data } = response.filter((key) => key.name === "header_proposes")[0];
    const proposeWrapper = document.getElementById("header__bottom-propose-wrapper");
    function handleClickOnProposes() {
        const searchBar = document.getElementById("search-bar");
        const proposes = document.querySelectorAll(".propose");
        for (const propose of proposes) {
            propose.addEventListener("click", () => {
                searchBar.value = propose.innerText;
            });
        }
    }
    //
    const proposesList = document.createElement("ul");
    proposesList.id = "proposes";
    searchBar.oninput = (e) => {
        const htmlList = [];
        for (const elem of data) {
            if (elem.startsWith(e.target.value.toLowerCase())) {
                htmlList.push(`<li class="propose">${elem}</li>`);
                if (htmlList.length >= 5) break;
            }
        }
        if (htmlList.length > 0) {
            proposesList.innerHTML = htmlList.join("");
            handleClickOnProposes();
        } else {
            proposesList.innerHTML = "<li class='propose'>không tìm thấy sản phẩm</li>";
        }
        proposeWrapper.append(proposesList);
    };
    // proposes're showed when focus on search bar
    (() => {
        const container = document.getElementById("header__bottom-search-list");
        const { data } = response.filter((key) => key.name === "header_bottom_proposes")[0];
        for (const shop of data) {
            const newShop = document.createElement("li");
            newShop.className = "header__bottom-search-link";
            newShop.innerHTML = `
                    <a href="javascript:void(0)">${shop}</a>
                `;
            container.append(newShop);
        }
    })();
    searchBar.onblur = () => {
        setTimeout(() => proposeWrapper.removeChild(proposesList), 200);
    };
}

//login

(async () => {
    const headerBody = document.querySelector(".header-body");
    const userId = localStorage.getItem("userId");
    const profileWrapper = document.querySelector(".profileWrapper");
    if (userId) {
        const res = await axios.get("http://localhost:8080/users/" + userId);
        document.querySelector(".become-buyer").style.display = "none";
        headerBody.style.width = "1200px";
        headerBody.style.margin = "auto";
        profileWrapper.innerHTML = `
        <div class="d-flex profile-div">
            <img class="avatar" src="${
                res.data.avatar || "http://localhost:8080/imgs/newavatar_1688714315851.jfif"
            }" alt="avatar">
            <div class="name">${res.data.username}</div>
        </div>
        <ul class="options">
            <li>
                <form class="uploadAvatarForm" action="/users/${userId}/uploadAvatar" method="POST" enctype="multipart/form-data">
                    <label class="option d-block"  for="entryavatar">
                        Chọn ảnh
                        <input style="display: none;" type="file" name="newavatar" id="entryavatar">
                    </label>
                </form>
            </li>
            <li class="option logout-btn">Đăng xuất</li>
        </ul>
        `;
    } else {
        profileWrapper.classList.add("d-flex");
        profileWrapper.innerHTML = `
            <div class="header__top-link border-right">
                <a href="/signup">Đăng ký</a>
            </div>
            <div class="header__top-link">
                <a href="/login">Đăng nhập</a>
            </div>
        `;
    }
})().then(() => {
    // logout
    const logoutBtn = document.querySelector(".logout-btn");
    const entry = document.getElementById("entryavatar");
    entry?.addEventListener("change", (e) => {
        document.querySelector(".uploadAvatarForm").submit();
    });
    logoutBtn?.addEventListener("click", () => {
        localStorage.removeItem("userId");
        window.location.href = "/";
    });
});

async function updateCart() {
    try {
        const wrapperCart = document.querySelector(".item-in-cart");
        const userId = localStorage.getItem("userId");
        if (userId) {
            var res = await axios.get("http://localhost:8080/users/" + userId + "/cart");
            document.querySelector(".showCart").href = `/cart`;
        } else document.querySelector(".showCart").href = `/login`;
        if (userId && res.data.length > 0) {
            document.querySelector(".itemInCart").innerText = res.data.length;
            let items = "";
            let amount = 0;
            const elements = res.data.reverse();
            for (const element of elements) {
                if (amount === 5) break;
                items += `
                <a href="/product/${element.itemUrl}" class="text-decoration-none">
                    <div class="item">
                        <img src="${element.img}"
                            alt="photo" class="item-img">
                        <div class="noti-body">
                            <div class="item-desc">${element.desc}</div>
                            <div class="item-price">${element.price}đ</div>
                        </div>
                    </div>
                </a>\n`;
                amount++;
            }
            wrapperCart.innerHTML = `
            <div>
                <div class="title">Sản Phẩm Mới Thêm</div>
                ${items}
            </div>\n`;
        } else {
            const empty = document.createElement("div");
            empty.className = "empty-item";
            empty.innerHTML = `
                <img
                    src="https://res.cloudinary.com/dh8bwlxbr/image/upload/v1688182260/Shopee%20Project/cart_r0jlvy.png"
                    alt="items" />
                <p>Chưa có sản phẩm</p>
                `;
            wrapperCart.append(empty);
        }
    } catch (e) {
        console.log(e);
    }
}

handleProposes();
updateCart();

export { updateCart };
