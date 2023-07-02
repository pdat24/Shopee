import { fetchData } from "../common/base";
import "./auto-sliders.js";
import "./category.js";
import "./flash-item.js";
import "./shopee-mall.js";
import "./trending.js";
import "./suggest.js";
import "../common/footer.js";
import "../common/headerScript.js";

function renderSaleItems() {
    const saleItems = document.getElementById("content__top-sale");
    fetchData("http://localhost:8080/API/saleItems").then((items) => {
        for (const item of items) {
            const saleItem = document.createElement("a");
            saleItem.className = "content__top-items";
            saleItem.href = "javascript:void(0)";
            saleItem.innerHTML = `
                    <img src="${item.src}" alt="sale-items">
                    <p>${item.text}</p>
            `;
            saleItems.append(saleItem);
        }
    });
}

// cover layer that's displayed at the begin
function handleLayer() {
    const closeBtn = document.getElementById("cover-layer__close");
    const layer = document.getElementById("cover-layer");
    const layerImg = document.getElementById("cover-layer__img");
    sessionStorage.setItem("firstTime", true);
    document.body.style.overflowY = "hidden";
    closeBtn.onclick = () => {
        layer.hidden = true;
        document.body.style.overflowY = null;
    };
    layer.onclick = (event) => {
        if (!event.defaultPrevented) {
            layer.hidden = true;
            document.body.style.overflowY = null;
        }
    };
    layerImg.onclick = (event) => {
        event.preventDefault();
    };
}

// countdown from a specific time
function handleTimeDown({ id_h, id_m, id_s }, { s_h, s_m, s_s }) {
    const hour = document.getElementById(id_h);
    const min = document.getElementById(id_m);
    const sec = document.getElementById(id_s);
    const timeID = setInterval(() => {
        if (s_s > 0) {
            s_s--;
        } else {
            s_s = 59;
            s_m--;
            if (s_m < 0) {
                s_h--;
                s_m = 59;
            }
        }
        s_s >= 10 ? (sec.textContent = s_s) : (sec.textContent = "0" + s_s);
        s_m >= 10 ? (min.textContent = s_m) : (min.textContent = "0" + s_m);
        s_h >= 10 ? (hour.textContent = s_h) : (hour.textContent = "0" + s_h);
        if (s_s <= 0 && s_h <= 0 && s_m <= 0) clearInterval(timeID);
    }, 1000);
}

handleLayer();
renderSaleItems();
handleTimeDown(
    {
        id_h: "flash-sale__time-h",
        id_m: "flash-sale__time-m",
        id_s: "flash-sale__time-s",
    },
    {
        s_h: 8,
        s_m: 10,
        s_s: 25,
    }
);
