import { ForwUnitPX, BackwUnitPX } from "./slide.js";
import { fetchData, handleMoveSlideBtn } from "./base.js";

async function renderFlashSaleItem(bodyWidth, col) {
    const container = document.getElementById("flash-sale__wrapper");
    let totalWidth = 0;
    await fetchData("http://localhost:3000/flash-sale").then((items) => {
        totalWidth = (bodyWidth / col) * items.length;
        container.style.width = totalWidth + "px";
        for (const item of items) {
            const newItem = document.createElement("div");
            const newMain = document.createElement("a");
            const newBody = document.createElement("div");
            const newFooter = document.createElement("div");
            newItem.className = "flash-sale__body-item";
            newMain.className =
                "flash-sale__body-item-main text-decoration-none";
            newMain.href = "javascript:void(0)";
            newBody.className = "flash-sale__item-body";
            newFooter.className = "flash-sale__item-footer";
            newBody.innerHTML = `
                <div
                    class="flash-sale__item-body-img"
                    style="background-image: url(${item.img});"
                ></div>
                <div class="flash-sale__item-body-mall">
                    <div
                        class="flash-sale__item-body-mall-text"
                    ></div>
                </div>
                <div class="discount">
                    <span
                        class="text-danger font-s13"
                        style="line-height: 1.6rem"
                        >${item.discount}</span
                    >
                    <span class="text-light font-s14"
                        >Giảm</span
                    >
                </div>
                <div class="flash-sale__item-body-bg"></div>
            `;
            newFooter.innerHTML = `
                <div class="flash-sale__item-footer-cost">
                    đ ${item.cost}
                </div>
                <div class="flash-sale__item-footer-bar">
                    
                    <div
                        class="flash-sale__item-footer-img"
                    >
                        <div class="flash-sale__item-footer-fire"></div>
                    </div>
                    <div
                        class="flash-sale__item-footer-layer"
                    ></div>
                    <div
                        class="flash-sale__item-footer-text"
                    >
                        ĐANG BÁN CHẠY
                    </div>
                </div>
            `;
            newMain.append(newBody);
            newMain.append(newFooter);
            newItem.append(newMain);
            container.append(newItem);
        }
    });
    return totalWidth;
}

// flash sale
renderFlashSaleItem(1200, 6)
    .then((totalWidth) => {
        const forward = new ForwUnitPX(
            {
                p_btn: "flash-sale__forward",
                p_body: "flash-sale__body",
                p_wrapper: "flash-sale__wrapper",
            },
            [1200, totalWidth, 6]
        );
        forward.catchEvent();
        const backward = new BackwUnitPX(
            {
                p_btn: "flash-sale__backward",
                p_body: "flash-sale__body",
                p_wrapper: "flash-sale__wrapper",
            },
            [1200, totalWidth, 6]
        );
        backward.catchEvent();
    })
    .then(() =>
        handleMoveSlideBtn(
            {
                fw: "flash-sale__forward",
                bw: "flash-sale__backward",
            },
            "flash-sale__wrapper",
            1200
        )
    );
