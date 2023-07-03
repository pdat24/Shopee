import { fetchData } from "../base.js";

function renderFooterTrending(key, parentId) {
    let index = 1;
    fetchData("http://localhost:8080/API/footerKeywords").then((res) => {
        const container = document.getElementById(parentId);
        const data = res[0][key];
        const len = data.length;
        data.forEach((elem) => {
            const newItem = document.createElement("span");
            newItem.innerHTML =
                `
            <a 
                href="javascript:void(0)"
                class="text-capitalize text-color"
                >${elem}
            </a>` + (index !== len ? "<span>&nbsp;</span>|<span>&nbsp;</span>" : "");
            index++;
            container.append(newItem);
        });
    });
}

renderFooterTrending("footerTopTrending", "footer__body-topKeyword");
renderFooterTrending("footerTopBrandName", "footer__body-topBrandName");
