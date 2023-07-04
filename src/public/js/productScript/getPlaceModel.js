(() => {
    const closeBtn = document.querySelector(".close-get-place-model");
    const layer = document.querySelector(".place-layer");
    const dialog = document.querySelector(".place-dialog");
    closeBtn.addEventListener("click", () => {
        dialog.style.transform = "scale(0, 0)";
        document.body.style.overflow = "auto";
        setTimeout(() => {
            layer.style.display = "none";
        }, 100);
    });
    document.querySelector(".set-place").onclick = () => {
        layer.style.display = "flex";
        document.body.style.overflow = "hidden";
        setTimeout(() => {
            dialog.style.transform = "scale(1, 1)";
        });
    };
    document.querySelector(".curr-place").onclick = () => {
        navigator.geolocation.getCurrentPosition(console.log);
    };
})();
