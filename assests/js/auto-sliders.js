import { fetchData } from "./base.js";

function renderSlider(src, target, indicator, items) {
    let size = 0;
    function renderBtns(size) {
        const slideNavs = document.getElementById(indicator);
        for (let i = 1; i <= size; ++i) {
            const slideNav = document.createElement("span");
            slideNav.innerHTML = `
                <button
                    data-bs-target="#${items}"
                    data-bs-toggle="carousel"
                    class="rounded-circle"
                    data-bs-slide-to="${i}"
                ></button>
            `;
            slideNavs.append(slideNav);
        }
    }
    function renderImgs() {
        const itemContainer = document.getElementById(target);
        fetchData(`http://localhost:3000/${src}`).then((slides) => {
            size = slides.length;
            for (const slide of slides) {
                const newSlide = document.createElement("div");
                newSlide.className = "carousel-item h-100";
                newSlide.innerHTML = `
                        <a href="javascript:void(0)"
                            ><img
                                class="w-100"
                                src="${slide}"
                                alt="photo"
                        /></a>
                    `;
                itemContainer.append(newSlide);
            }
            renderBtns(size);
        });
    }
    renderImgs();
}

function handleMouseOverSlider() {
    const carouselNavs = document.querySelectorAll(".carousel-nav");
    for (const elem of carouselNavs) {
        elem.closest(".carousel").addEventListener("mouseenter", () => {
            elem.style.display = "block";
        });
        elem.closest(".carousel").addEventListener("mouseleave", () => {
            elem.style.display = "none";
        });
    }
}

renderSlider("content__top-slides", "slides", "slide-navs", "slider");
renderSlider(
    "shopee-mall__slider-items",
    "shopee-mall__slider-item",
    "shopee-mall__slider-navs",
    "shopee-mall__slider"
);
handleMouseOverSlider();
