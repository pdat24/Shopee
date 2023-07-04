import { fetchData } from "./base";

// show proposes on header
async function handleProposes() {
    const searchBar = document.getElementById("search-bar");
    const response = await fetchData("http://localhost:8080/API/proposedItems");
    const headerProposes = response.filter((key) => key.name === "header_proposes")[0];
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
        for (const elem of headerProposes) {
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

handleProposes();
