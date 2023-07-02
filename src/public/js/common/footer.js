import { fetchData } from "./base.js";

class RenderFooterSupport {
    static renderFooterList(data, id) {
        const container = document.getElementById(id);
        data.forEach((text) => {
            const newItem = document.createElement("li");
            newItem.className = "my-3 opacity-75";
            newItem.innerHTML = `
            <a
                class="text-decoration-none text-capitalize text-color"
                href="javascript:void(0)"
                >${text}
            </a>
            `;
            container.append(newItem);
        });
    }
    static renderFooterImg(data, id) {
        const container = document.getElementById(id);
        data.forEach((img) => {
            const newItem = document.createElement("li");
            newItem.className = "footer__support-img";
            newItem.innerHTML = `
            <img
                src="${img}"
                alt="photo"
            />
            `;
            container.append(newItem);
        });
    }
    static async run() {
        const data = (await fetchData("http://localhost:8080/API/footerSupport"))[0];
        RenderFooterSupport.renderFooterList(data.supportClient, "footer__support-client");
        RenderFooterSupport.renderFooterList(data.aboutShopee, "footer__support-about");
        RenderFooterSupport.renderFooterImg(data.paymentImg, "footer__support-payment");
        RenderFooterSupport.renderFooterImg(data.shipping, "footer__support-shipping");
    }
}

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

async function renderCategory() {
    const cols = document.querySelectorAll(".footer__category-row");
    const len = cols.length;
    const data = (await fetchData("http://localhost:8080/API/footerCategory"))[0];
    console.log(len);
    for (let i = 0; i < len; ++i) {
        data[`col${i + 1}`].forEach((elem) => {
            let index = 1;
            const newBlock = document.createElement("div");
            newBlock.className = "my-4";
            const newTitle = document.createElement("h5");
            const newBody = document.createElement("div");
            newBody.className = "flex-wrap d-flex";
            newTitle.innerText = elem.title;
            newTitle.className = "fw-bold";
            elem.list.forEach((item) => {
                const newItem = document.createElement("a");
                newItem.href = "javascript:void(0)";
                newItem.className = "text-color text-decoration-none";
                newItem.innerText = item;
                const newSep = document.createElement("span");
                newSep.innerHTML = "&nbsp;|&nbsp;";
                index !== elem.list.length ? newBody.append(newItem, newSep) : newBody.append(newItem);

                index++;
            });
            newBlock.append(newTitle, newBody);
            cols[i].append(newBlock);
        });
    }
}

renderFooterTrending("footerTopTrending", "footer__body-topKeyword");
renderFooterTrending("footerTopBrandName", "footer__body-topBrandName");
RenderFooterSupport.run();
renderCategory();
