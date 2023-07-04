// toggle preview image
(() => {
    const previewingImage = document.getElementById("active-img");
    const trigger = document.querySelector(".productDiv__image-lg");
    const target = document.querySelector(".preview-img-layer");
    const dialog = document.querySelector(".preview-dialog");
    const imgs = document.querySelectorAll(".queuing-imgs");
    let active = 0;
    imgs.forEach((elem, index) => {
        elem.onclick = () => {
            imgs[active].classList.remove("previewing-img");
            active = index;
            elem.classList.add("previewing-img");
            const image = elem.getAttribute("src");
            previewingImage.style.backgroundImage = `url(${image})`;
        };
        window.addEventListener("move", (e) => {
            if (e.detail === index) elem.click();
        });
    });
    document.querySelector(".backward-btn").onclick = () => {
        if (active === 0) window.dispatchEvent(new CustomEvent("move", { detail: imgs.length - 1 }));
        else window.dispatchEvent(new CustomEvent("move", { detail: active - 1 }));
    };
    document.querySelector(".forward-btn").onclick = () => {
        if (active === imgs.length - 1) window.dispatchEvent(new CustomEvent("move", { detail: 0 }));
        else window.dispatchEvent(new CustomEvent("move", { detail: active + 1 }));
    };
    trigger.onclick = () => {
        target.style.display = "flex";
        document.body.style.overflow = "hidden";
    };
    target.addEventListener("click", (e) => {
        if (!e.defaultPrevented) {
            target.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
    dialog.addEventListener("click", (e) => e.preventDefault());
})();
