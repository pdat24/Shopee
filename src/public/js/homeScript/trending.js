import { BackwUnitPX, ForwUnitPX } from "./slide.js";
import { fetchData, handleMoveSlideBtn } from "../common/base.js";

async function renderTrendingItem(bodyWidth, col) {
    const container = document.getElementById("trending__wrapper");
    let totalWidth = 0;
    await fetchData("http://localhost:8080/API/trendingItems").then((items) => {
        totalWidth = (bodyWidth / col) * items.length;
        container.style.width = totalWidth + "px";
        for (const item of items) {
            const newItem = document.createElement("a");
            newItem.className = "trending__item text-decoration-none";
            newItem.href = "javascript:void(0)";
            newItem.innerHTML = `  
            <div class="trending__item__top">
                <img
                    class="trending__item-img"
                    src="${item.img}"
                    alt="photo"
                />
                <div class="trending__item__top-icon"></div>
                <div class="trending__item__top-cost">
                    Bán ${item.cost}k+ / tháng
                </div>
            </div>
            <div class="trending__item__bottom">
                <p class="text-center">${item.text.length < 25 ? item.text : item.text.slice(0, 22) + "..."}</p>
            </div>
            `;
            container.prepend(newItem);
        }
    });
    return totalWidth;
}

// trending
renderTrendingItem(1200, 6)
    .then((totalWidth) => {
        const forward = new ForwUnitPX(
            {
                p_btn: "trending__forward",
                p_body: "trending__body",
                p_wrapper: "trending__wrapper",
            },
            [1200, totalWidth, 6]
        );
        forward.catchEvent();
        const backward = new BackwUnitPX(
            {
                p_btn: "trending__backward",
                p_body: "trending__body",
                p_wrapper: "trending__wrapper",
            },
            [1200, totalWidth, 6]
        );
        backward.catchEvent();
    })
    .then(() =>
        handleMoveSlideBtn(
            {
                fw: "trending__forward",
                bw: "trending__backward",
            },
            "trending__wrapper",
            1200
        )
    );
