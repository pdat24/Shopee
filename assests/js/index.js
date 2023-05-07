import { fetchData } from "./base.js";
import "./auto-sliders.js";
import "./category.js";
import "./flash-item.js";
import "./shopee-mall.js";
import "./trending.js";
import "./suggest.js";
import "./footer.js";

// show proposes on header
async function handleProposes() {
    const searchBar = document.getElementById("search-bar");
    let data = await fetchData("http://localhost:3000/header-propose");
    const proposeWrapper = document.getElementById(
        "header__bottom-propose-wrapper"
    );
    function handleClickOnProposes() {
        const searchBar = document.getElementById("search-bar");
        const proposes = document.querySelectorAll(".propose");
        for (const propose of proposes) {
            propose.addEventListener("click", () => {
                searchBar.value = propose.innerText;
            });
        }
    }
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
            proposesList.innerHTML =
                "<li class='propose'>không tìm thấy sản phẩm</li>";
        }
        proposeWrapper.append(proposesList);
    };
    searchBar.onblur = () => {
        setTimeout(() => proposeWrapper.removeChild(proposesList), 200);
    };
}

// proposes're showed when focus on search bar
function renderProposedShops() {
    const container = document.getElementById("header__bottom-search-list");
    fetchData("http://localhost:3000/header__bottom-proposes").then((shops) => {
        for (const shop of shops) {
            const newShop = document.createElement("li");
            newShop.className = "header__bottom-search-link";
            newShop.innerHTML = `
                    <a href="javascript:void(0)">${shop}</a>
                `;
            container.append(newShop);
        }
    });
}

function renderSaleItems() {
    const saleItems = document.getElementById("content__top-sale");
    fetchData("http://localhost:3000/sale-items").then((items) => {
        for (const item of items) {
            const saleItem = document.createElement("a");
            saleItem.className = "content__top-items";
            saleItem.href = "javascript:void(0)";
            saleItem.innerHTML = `
                    <img src="${item.src}" alt="sale-items">
                    <p>${item.text}</p>
            `;
            saleItems.append(saleItem);
        }
    });
}

// cover layer that's displayed at the begin
function handleLayer() {
    const closeBtn = document.getElementById("cover-layer__close");
    const layer = document.getElementById("cover-layer");
    const layerImg = document.getElementById("cover-layer__img");
    document.body.style.overflowY = "hidden";
    closeBtn.onclick = () => {
        layer.hidden = true;
        document.body.style.overflowY = null;
    };
    layer.onclick = (event) => {
        if (!event.defaultPrevented) {
            layer.hidden = true;
            document.body.style.overflowY = null;
        }
    };
    layerImg.onclick = (event) => {
        event.preventDefault();
    };
}

// countdown from a specific time
function handleTimeDown({ id_h, id_m, id_s }, { s_h, s_m, s_s }) {
    const hour = document.getElementById(id_h);
    const min = document.getElementById(id_m);
    const sec = document.getElementById(id_s);
    const timeID = setInterval(() => {
        if (s_s > 0) {
            s_s--;
        } else {
            s_s = 59;
            s_m--;
            if (s_m < 0) {
                s_h--;
                s_m = 59;
            }
        }
        s_s >= 10 ? (sec.textContent = s_s) : (sec.textContent = "0" + s_s);
        s_m >= 10 ? (min.textContent = s_m) : (min.textContent = "0" + s_m);
        s_h >= 10 ? (hour.textContent = s_h) : (hour.textContent = "0" + s_h);
        if (s_s <= 0 && s_h <= 0 && s_m <= 0) clearInterval(timeID);
    }, 1000);
}

handleProposes();
renderProposedShops();
renderSaleItems();
handleLayer();
handleTimeDown(
    {
        id_h: "flash-sale__time-h",
        id_m: "flash-sale__time-m",
        id_s: "flash-sale__time-s",
    },
    {
        s_h: 8,
        s_m: 10,
        s_s: 25,
    }
);
