import { fetchData } from "../common/base.js";

async function renderSuggestItem(col) {
    const container = document.getElementById("suggest__body");
    let group = document.createElement("div");
    group.className = "suggest__body-group";
    let numberItem = 0;
    await fetchData("http://localhost:8080/API/suggestedItems").then((items) => {
        for (const item of items) {
            const newItem = document.createElement("div");
            newItem.className = "suggest__item shadow-sm";

            const newMain = document.createElement("a");
            newMain.className = "suggest__item-container";
            newMain.href = `/product/${item._id}`;

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
                ${item.desc.length <= 50 ? item.desc : item.desc.slice(0, 47) + "..."}
            </p>
            <div class="suggest__item-sale">Giảm đ30k</div>
            <div class="suggest__item-footer-bot">
                <span class="suggest__item-cost"
                    ><span class="font-s13">đ</span>${item.price}</span
                >
                <span
                    class="suggest__item-sell text-capitalize text-muted"
                    >đã bán ${item.sold}</span
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
            if ((numberItem != 0 && numberItem % col == 0) || numberItem >= items.length) {
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

renderSuggestItem(6).then(() => {
    handleHoverSuggest();
});
