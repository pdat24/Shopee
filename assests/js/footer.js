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
        await fetchData("http://localhost:3000/footerSupport").then((data) => {
            this.renderFooterList(data.supportClient, "footer__support-client");
            this.renderFooterList(data.aboutShopee, "footer__support-about");
            this.renderFooterImg(data.paymentImg, "footer__support-payment");
            this.renderFooterImg(data.shipping, "footer__support-shipping");
        });
    }
}

function renderFooterTrending(src, parentId) {
    const container = document.getElementById(parentId);
    let index = 1;
    fetchData(src).then((data) => {
        const len = data.length;
        data.forEach((elem) => {
            const newItem = document.createElement("span");
            newItem.innerHTML =
                `
            <a 
                href="javascript:void(0)"
                class="text-capitalize text-color"
                >${elem}
            </a>` +
                (index !== len
                    ? "<span>&nbsp;</span>|<span>&nbsp;</span>"
                    : "");
            index++;
            container.append(newItem);
        });
    });
}

renderFooterTrending(
    "http://localhost:3000/footerTopTrending",
    "footer__body-topKeyword"
);
renderFooterTrending(
    "http://localhost:3000/footerTopBrandName",
    "footer__body-topBrandName"
);
RenderFooterSupport.run();
