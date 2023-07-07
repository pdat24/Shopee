import axios from "axios";
import "../common/base";
import "../common/footerScript";

(async () => {
    const wrapper = document.querySelector(".item-container");
    const userId = localStorage.getItem("userId");
    const res = await axios.get("http://localhost:8080/users/" + userId + "/cart");
    if (userId && res.data.length > 0) {
        let items = "";
        const elements = res.data.reverse();
        for (const element of elements) {
            items += `
            <div class="items-div">
                <div class="item w-100">
                    <div class="main">
                        <div class="left">
                            <input class="checkbox item-checkbox" value="${element._id}" type="checkbox" name="items[]">
                            <img class="item-img" src="${element.img}" />
                            <div>
                                <div class="desc">${element.desc}</div>
                                <img style="width: 120px;margin-left: 10px;"
                                    src="http://localhost:8080/cart/imgs/vn-50009109-3b974960a143e51de0d9e97dba91743b.png" />
                            </div>
                        </div>
                        <div class="d-flex right align-items-center">
                            <div class="label">đ${element.price}</div>
                            <div class="label">
                                <div class="amount-product-wrapper">
                                    <div role="button" class="text-center flex-grow-1 amount-product pop-item">
                                        <svg enable-background="new 0 0 10 10" width="10" viewBox="0 0 10 10" x="0" y="0" class="shopee-svg-icon">
                                            <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5">
                                            </polygon>
                                        </svg>
                                    </div>
                                    <div class="span"></div>
                                    <div class="cursor-default text-center flex-grow-2 amount-number amount-product">1
                                    </div>
                                    <div class="span"></div>
                                    <div role="button" class="text-center flex-grow-1 amount-product plus-item">
                                        <i class="fa-regular fa-plus"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="text-red label">
                                đ<div class="item-price">${element.price}</div>
                            </div>
                            <a class="label del-btn text-red fs-3" href="/users/${userId}/deleteCart/${element._id}">Xóa</a>
                        </div>
                    </div>
                    <div class="voucher">
                        <i class="icon fa-solid fa-ticket"></i>
                        <a class="text-decoration-none" href="#">Thêm mã giảm giá của Shop</a>
                    </div>
                    <div class="transport">
                        <i class="icon fa-sharp fa-solid fa-truck-fast"></i>
                        <div>
                            <span>
                                Giảm ₫15.000 phí vận chuyển đơn tối thiểu ₫50.000; Giảm ₫25.000 phí vận chuyển đơn tối
                                thiểu
                                ₫99.000
                            </span>
                            <a href="#" class="text-decoration-none">Tìm hiểu thêm</a>
                        </div>
                    </div>
                </div>
            </div>\n`;
        }
        wrapper.innerHTML = items;
    } else {
        wrapper.innerHTML = `
            <div class="p-3 d-flex justify-content-center align-items-center font-s14">
                Bạn chưa thêm sản phẩm nào. &nbsp;
                <a class="text-decoration-none text-red" href="/#trending__body">Thêm</a>
            </div>
        `;
    }
})().then(() => {
    const checkBoxes = document.querySelectorAll(".item-checkbox");
    const checkAll = document.getElementById("selectall");
    const submitBtn = document.getElementById("submitBtn");
    const numberOfCourse = checkBoxes.length;
    const selectedItemCost = document.querySelector(".numItem");
    const selectedItems = document.querySelector(".selectedItems");
    const cartForm = document.getElementById("cartForm");
    const userId = localStorage.getItem("userId");
    cartForm.action = "/users/" + userId + "/deleteCart";
    let totalPrice = 0;
    let courseCheckeds = 0;

    document.querySelector(".totalItem").innerText = numberOfCourse;
    checkAll.addEventListener("change", () => {
        for (const checkBox of checkBoxes) {
            checkBox.checked = checkAll.checked;
            if (checkAll.checked) {
                courseCheckeds = numberOfCourse;
                totalPrice += +checkBox.closest(".main").querySelector(".item-price").innerText * 1000;
                selectedItemCost.innerText = totalPrice;
            } else {
                courseCheckeds = 0;
                totalPrice = 0;
                selectedItemCost.innerText = 0;
            }
            submitBtn.disabled = courseCheckeds === 0;
        }
        selectedItems.innerText = checkAll.checked ? checkBoxes.length : 0;
    });
    for (const checkBox of checkBoxes) {
        checkBox.addEventListener("change", (e) => {
            const itemPrice = +e.target.closest(".main").querySelector(".item-price").innerText * 1000;
            if (!e.target.checked) {
                checkAll.checked = false;
                courseCheckeds--;
                selectedItemCost.innerText = +selectedItemCost.innerText - itemPrice;
                totalPrice = 0;
                selectedItems.innerHTML = +selectedItems.innerHTML - 1;
            } else {
                courseCheckeds++;
                selectedItemCost.innerText = +selectedItemCost.innerText + itemPrice;
                selectedItems.innerHTML = +selectedItems.innerHTML + 1;
            }
            checkAll.checked = courseCheckeds === numberOfCourse;
            submitBtn.disabled = courseCheckeds === 0;
        });
    }
});
