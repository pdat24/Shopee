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
    const addToCartBtns = document.querySelector(".add-to-cart-btn");
    const buyBtns = document.querySelector(".buy-btn");
    buyBtns.addEventListener("click", () => {
        const userId = localStorage.getItem("userId");
        if (!userId) window.location.href = "/login";
    });
    addToCartBtns.onclick = async () => {
        const _id = addToCartBtns.id;
        const userId = localStorage.getItem("userId");
        if (userId) {
            await axios.post("http://localhost:8080/users/" + userId + "/cart", { itemId: _id, userId });
            await updateCart();
            alert("Thêm vào giỏ hàng thành công");
        } else window.location.href = "/login";
    };
})();
