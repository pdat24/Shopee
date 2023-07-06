import "../common/base";
import "../common/footerScript";

(() => {
    const checkBoxes = document.querySelectorAll(".item-checkbox");
    const checkAll = document.getElementById("selectall");
    const submitBtn = document.getElementById("submitBtn");
    const numberOfCourse = checkBoxes.length;
    const selectedItemCost = document.querySelector(".numItem");
    const selectedItems = document.querySelector(".selectedItems");
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
})();
