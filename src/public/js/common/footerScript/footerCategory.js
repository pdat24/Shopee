import { fetchData } from "../base.js";

async function renderCategory() {
    const cols = document.querySelectorAll(".footer__category-row");
    const len = cols.length;
    const data = (await fetchData("http://localhost:8080/API/footerCategory"))[0];
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

renderCategory();
