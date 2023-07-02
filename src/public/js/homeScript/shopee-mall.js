import { BackwUnitPercent, ForwUnitPercent } from "./slide.js";
import { fetchData, handleMoveSlideBtn } from "../common/base.js";

async function renderShopeeMallItem() {
    const container = document.getElementById("shopee-mall__wrapper");
    let totalWidth = 0;
    await fetchData("http://localhost:8080/API/shopeeMallProductItems").then((items) => {
        totalWidth = 25 * items.length;
        container.style.width = totalWidth + "%";
        for (const item of items) {
            const newGroup = document.createElement("div");
            newGroup.className = "shopee-mall__group";
            const fItem = document.createElement("a");
            fItem.href = "javascript:void(0)";
            fItem.className = "shopee-mall__product";
            fItem.innerHTML = `
                    <div class="shopee-mall__product-img w-100" style="background-image: url('${item[0].src}')"></div>
                    <p class="shopee-mall__product-desc">${
                        item[0].text.length <= 24 ? item[0].text : item[0].text.slice(0, 15) + "..."
                    }</p>
                `;
            newGroup.append(fItem);
            if (item[1]) {
                const sItem = document.createElement("a");
                sItem.href = "javascript:void(0)";
                sItem.className = "shopee-mall__product";
                sItem.innerHTML = `
                        <div class="shopee-mall__product-img w-100" style="background-image: url('${
                            item[1].src
                        }')"></div>
                        <p class="shopee-mall__product-desc">${
                            item[1].text.length <= 24 ? item[1].text : item[1].text.slice(0, 15) + "..."
                        }</p>
                    `;
                newGroup.append(sItem);
            }
            container.append(newGroup);
        }
    });
    return totalWidth;
}

// shopee mall
renderShopeeMallItem()
    .then((totalWidth) => {
        const forward = new ForwUnitPercent(
            {
                p_btn: "shopee-mall__forward",
                p_body: "shopee-mall__products",
                p_wrapper: "shopee-mall__wrapper",
            },
            [totalWidth, 100, 4]
        );
        forward.catchEvent();
        const backward = new BackwUnitPercent(
            {
                p_btn: "shopee-mall__backward",
                p_body: "shopee-mall__products",
                p_wrapper: "shopee-mall__wrapper",
            },
            [totalWidth, 100, 4]
        );
        backward.catchEvent();
    })
    .then(() =>
        handleMoveSlideBtn(
            {
                fw: "shopee-mall__forward",
                bw: "shopee-mall__backward",
            },
            "shopee-mall__wrapper",
            100
        )
    );
