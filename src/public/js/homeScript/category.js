import { ForwUnitPX, BackwUnitPX } from "./slide.js";
import { fetchData, handleMoveSlideBtn } from "./base.js";

async function renderCategoryItems(bodyWidth, col) {
    const container = document.getElementById("category__wrapper");
    let totalWidth = 0;
    await fetchData("http://localhost:8080/API/categoryItems").then((items) => {
        totalWidth = (bodyWidth / col) * items.length;
        container.style.width = totalWidth + "px";
        for (const item of items) {
            const newGroup = document.createElement("div");
            newGroup.className = "category__group";
            const fNewItem = document.createElement("a");
            fNewItem.className = "category-body-item d-block";
            fNewItem.href = "javascript:void(0)";
            fNewItem.innerHTML = `
                <div class="mt-3">
                    <img src="${item["0"].src}" class="category-body-img" alt="photo">
                </div>
                <p class="category-body-text" >${item["0"].text}</p>
            `;
            newGroup.append(fNewItem);
            if (item["1"]) {
                const sNewItem = document.createElement("a");
                sNewItem.className = "category-body-item d-block";
                sNewItem.href = "javascript:void(0)";
                sNewItem.innerHTML = `
                    <div class="mt-3">
                        <img src="${item["1"].src}" class="category-body-img" alt="photo">
                    </div>
                    <p class="category-body-text" >${item["1"].text}</p>
                `;
                newGroup.append(sNewItem);
            }
            container.append(newGroup);
        }
    });
    return totalWidth;
}

renderCategoryItems(1200, 10)
    .then((totalWidth) => {
        const forward = new ForwUnitPX(
            {
                p_btn: "category__forward",
                p_body: "category-body",
                p_wrapper: "category__wrapper",
            },
            [1200, totalWidth, 10]
        );
        forward.catchEvent();
        const backward = new BackwUnitPX(
            {
                p_btn: "category__backward",
                p_body: "category-body",
                p_wrapper: "category__wrapper",
            },
            [1200, totalWidth, 10]
        );
        backward.catchEvent();
    })
    .then(() =>
        handleMoveSlideBtn(
            {
                fw: "category__forward",
                bw: "category__backward",
            },
            "category__wrapper",
            1200
        )
    );
