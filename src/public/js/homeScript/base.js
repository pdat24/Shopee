async function fetchData(src) {
    const response = await fetch(src);
    return response.json();
}

function handleMoveSlideBtn({ bw, fw }, wrapper, bodyW) {
    const forwBtn = document.getElementById(fw);
    const backwBtn = document.getElementById(bw);
    const container = document.getElementById(wrapper);
    const wrapperW = Number.parseFloat(container.style.width);
    backwBtn.style.display = "none";
    function toggleBackw() {
        const leftW = Number.parseFloat(container.style.left);
        if (leftW == 0) {
            setTimeout(() => {
                backwBtn.style.display = "none";
            }, 400);
        } else {
            backwBtn.style.display = "block";
        }
    }
    function toggleForw() {
        const leftW = Number.parseFloat(container.style.left);
        if (wrapperW == bodyW + Math.abs(leftW)) {
            setTimeout(() => {
                forwBtn.style.display = "none";
            }, 400);
        } else {
            forwBtn.style.display = "block";
        }
    }

    forwBtn.onclick = () => {
        setTimeout(() => {
            toggleBackw();
            toggleForw();
        }, 100);
    };
    backwBtn.onclick = () => {
        setTimeout(() => {
            toggleBackw();
            toggleForw();
        }, 100);
    };
}

export { fetchData, handleMoveSlideBtn };
