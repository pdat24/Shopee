import { fetchData } from "./base.js";

async function renderSuggestItem(col) {
    const container = document.getElementById("suggest__body");
    let group = document.createElement("div");
    group.className = "suggest__body-group";
    let numberItem = 0;
    await fetchData("http://localhost:3000/suggest-items").then((items) => {
        for (const item of items) {
            const newItem = document.createElement("div");
            newItem.className = "suggest__item shadow-sm";

            const newMain = document.createElement("a");
            newMain.className = "suggest__item-container";
            newMain.href = "#suggest__header";

            const newBody = document.createElement("div");
            newBody.className = "suggest__item-body";

            const newFooter = document.createElement("div");
            newFooter.className = "suggest__item-footer";

            const newFloat = document.createElement("div");
            newFloat.className = "suggest__item-float";
            newBody.innerHTML = `
            <div class="suggest__item-body-img" style="background-image: url(${item.img})"></div>
                <div class="suggest__item-body-mall">
                    <div class="suggest__item-body-text">
                        Yêu thích
                    </div>
                </div>
                <div class="discount">
                    <span class="text-danger font-s13">12%</span>
                    <span class="text-light font-s14">Giảm</span>
                </div>
            <div class="suggest__item-body-bg"></div>
            `;
            newFooter.innerHTML = `
            <p class="suggest__item-footer-text text-capitalize">
                ${
                    item.desc.length <= 50
                        ? item.desc
                        : item.desc.slice(0, 47) + "..."
                }
            </p>
            <div class="suggest__item-sale">Giảm đ30k</div>
            <div class="suggest__item-footer-bot">
                <span class="suggest__item-cost"
                    ><span class="font-s13">đ</span>899.000</span
                >
                <span
                    class="suggest__item-sell text-capitalize text-muted"
                    >đã bán 2.5k</span
                >
            </div>
            `;
            newFloat.innerHTML = `
            <p class="suggest__item-float-bot">Tìm sản phẩm tương tự</p>
            `;
            newMain.append(newBody, newFooter);
            newItem.append(newMain, newFloat);
            group.append(newItem);
            numberItem++;
            if (
                (numberItem != 0 && numberItem % col == 0) ||
                numberItem >= items.length
            ) {
                container.append(group);
                group = document.createElement("div");
                group.className = "suggest__body-group";
            }
        }
    });
}

function handleHoverSuggest() {
    const items = document.querySelectorAll(".suggest__item");
    for (const item of items) {
        item.onmouseenter = (event) => {
            event.target.style.top = "-2px";
            event.target.children[1].style.display = "block";
        };
        item.onmouseleave = (event) => {
            event.target.style.top = null;
            event.target.children[1].style.display = null;
        };
    }
}

function handleStickeyHeader() {
    const container = document.getElementById("suggest");
    const seeMore = document.getElementById("suggest__seemore");
    const mainHeader = document.getElementById("header");
    const header = document.getElementById("suggest__header");
    const copyHeader = header.cloneNode(true);
    const seeMoreH = Number.parseFloat(window.getComputedStyle(seeMore).height);
    const headerH = Number.parseFloat(window.getComputedStyle(header).height);
    container.append(copyHeader);
    window.onscroll = () => {
        const seeMoreY = Number.parseFloat(seeMore.getBoundingClientRect().y);
        const headerY = Number.parseFloat(header.getBoundingClientRect().y);
        const copyHeaderY = Number.parseFloat(
            copyHeader.getBoundingClientRect().y
        );
        const mHeaderH = Number.parseFloat(
            window.getComputedStyle(mainHeader).height
        );
        if (
            headerY - mHeaderH <= 0 &&
            seeMoreY >= mHeaderH + (headerH - seeMoreH)
        ) {
            copyHeader.style.display = "flex";
            copyHeader.style.position = "fixed";
            copyHeader.style.top = mHeaderH + "px";
            copyHeader.style.width = "120rem";
            copyHeader.style.zIndex = 100;
        } else if (
            !(seeMoreY + seeMoreH <= headerH + copyHeaderY) &&
            seeMoreY >= mHeaderH + (headerH - seeMoreH)
        ) {
            console.log(seeMoreY + seeMoreH, headerH + copyHeaderY);
            copyHeader.style.display = "none";
            copyHeader.style.position = null;
        }
        if (
            seeMoreY + seeMoreH <= headerH + copyHeaderY ||
            (seeMoreY + seeMoreH <= mHeaderH + headerH &&
                seeMoreY + seeMoreH >= mHeaderH)
        ) {
            copyHeader.style.position = "fixed";
            copyHeader.style.display = "flex";
            if (
                seeMoreY + seeMoreH <= mHeaderH + headerH &&
                seeMoreY + seeMoreH >= mHeaderH
            ) {
                copyHeader.style.top = seeMoreY + (headerH - seeMoreH) + "px";
            }
            copyHeader.style.top = -(headerH - seeMoreY) + seeMoreH + "px";
        }
    };
}

renderSuggestItem(6).then(() => {
    handleHoverSuggest();
    handleStickeyHeader();
});
