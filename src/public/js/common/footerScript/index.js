import { fetchData } from "../base.js";

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
RenderFooterSupport.run();
