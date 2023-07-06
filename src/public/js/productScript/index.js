import axios from "axios";
import { updateCart } from "../common/headerScript";
import "../common/base";
import "../common/footerScript";
import "./togglePreviewImg";
import "./getPlaceModel";

(() => {
    let num = 1;
    const amount = document.querySelector(".amount-number");
    const add = document.querySelector(".plus-item");
    const sub = document.querySelector(".pop-item");
    add.addEventListener("click", () => {
        num++;
        amount.innerText = num;
    });
    sub.addEventListener("click", () => {
        if (num > 1) {
            num--;
            amount.innerText = num;
        }
    });
})();

(() => {
    const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");
    addToCartBtns.forEach((btn) => {
        btn.onclick = async () => {
            const _id = btn.getAttribute("id");
            await axios.post("http://localhost:8080/cart", { _id });
            await updateCart();
            alert("Thêm vào giỏ hàng thành công");
        };
    });
})();
