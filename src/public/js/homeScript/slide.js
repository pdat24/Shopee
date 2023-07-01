class SlideUnitPX {
    static wrapperLeft = 0;
    constructor({ p_btn, p_body, p_wrapper }, [bodyWidth, wrapperWidth, col]) {
        this.btn = document.getElementById(p_btn);
        this.body = document.getElementById(p_body);
        this.wrapper = document.getElementById(p_wrapper);
        this.bodyWidth = bodyWidth;
        this.wrapperWidth = wrapperWidth;
        this.maxForwardWidth = this.bodyWidth - bodyWidth / col;
        this.getProperties = this.getProperties.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.forw = this.forw.bind(this);
        this.backw = this.backw.bind(this);
        this.catchEvent = this.catchEvent.bind(this);
        this.toggle = this.toggle.bind(this);
    }
    getProperties() {
        const wrapperRestWidth =
            this.wrapperWidth -
            (Math.abs(SlideUnitPX.wrapperLeft) + this.bodyWidth);
        return {
            wrapperRestWidth,
        };
    }
    toggle() {}
    forw(prop) {}
    backw() {}
    handleClick() {
        const prop = this.getProperties();
        this.forw(prop);
        this.backw();
        this.wrapper.style.left = SlideUnitPX.wrapperLeft + "px";
        this.btn.removeEventListener("click", this.handleClick);
        setTimeout(
            () => this.btn.addEventListener("click", this.handleClick),
            550
        );
    }
    catchEvent() {
        this.btn.addEventListener("click", this.handleClick);
    }
}

class ForwUnitPX extends SlideUnitPX {
    constructor({ p_btn, p_body, p_wrapper }, [bodyWidth, wrapperWidth, col]) {
        super({ p_btn, p_body, p_wrapper }, [bodyWidth, wrapperWidth, col]);
    }
    forw(prop) {
        if (prop.wrapperRestWidth >= this.maxForwardWidth) {
            SlideUnitPX.wrapperLeft -= this.maxForwardWidth;
        } else {
            SlideUnitPX.wrapperLeft -= prop.wrapperRestWidth;
        }
    }
}

class BackwUnitPX extends SlideUnitPX {
    constructor({ p_btn, p_body, p_wrapper }, [bodyWidth, wrapperWidth, col]) {
        super({ p_btn, p_body, p_wrapper }, [bodyWidth, wrapperWidth, col]);
    }
    backw() {
        if (Math.abs(SlideUnitPX.wrapperLeft) >= this.maxForwardWidth) {
            SlideUnitPX.wrapperLeft += this.maxForwardWidth;
        } else {
            SlideUnitPX.wrapperLeft += Math.abs(SlideUnitPX.wrapperLeft);
        }
    }
}

class SlideUnitPercent extends SlideUnitPX {
    static wrapperLeft = 0;
    constructor({ p_btn, p_body, p_wrapper }, [totalWidth, bodyWidth, col]) {
        super({ p_btn, p_body, p_wrapper }, [totalWidth, bodyWidth, col]);
        this.totalWidth = totalWidth;
        this.bodyWidth = bodyWidth;
        this.maxForwardWidth = 75;
    }
    getProperties() {
        const wrapperRestWidth =
            this.totalWidth -
            (this.bodyWidth + Math.abs(SlideUnitPercent.wrapperLeft));
        return {
            wrapperRestWidth,
        };
    }
    handleClick() {
        const prop = this.getProperties();
        this.forw(prop);
        this.backw();
        this.wrapper.style.left = SlideUnitPercent.wrapperLeft + "%";
        this.btn.removeEventListener("click", this.handleClick);
        setTimeout(
            () => this.btn.addEventListener("click", this.handleClick),
            550
        );
    }
}

class ForwUnitPercent extends SlideUnitPercent {
    constructor({ p_btn, p_body, p_wrapper }, [bodyWidth, wrapperWidth, col]) {
        super({ p_btn, p_body, p_wrapper }, [bodyWidth, wrapperWidth, col]);
    }
    forw(prop) {
        if (prop.wrapperRestWidth >= this.maxForwardWidth) {
            SlideUnitPercent.wrapperLeft -= this.maxForwardWidth;
        } else {
            SlideUnitPercent.wrapperLeft -= prop.wrapperRestWidth;
        }
    }
}

class BackwUnitPercent extends SlideUnitPercent {
    constructor({ p_btn, p_body, p_wrapper }, [bodyWidth, wrapperWidth, col]) {
        super({ p_btn, p_body, p_wrapper }, [bodyWidth, wrapperWidth, col]);
    }
    backw() {
        if (Math.abs(SlideUnitPercent.wrapperLeft) >= this.maxForwardWidth) {
            SlideUnitPercent.wrapperLeft += this.maxForwardWidth;
        } else {
            SlideUnitPercent.wrapperLeft += Math.abs(
                SlideUnitPercent.wrapperLeft
            );
        }
    }
}

export {
    SlideUnitPX,
    BackwUnitPX,
    ForwUnitPX,
    SlideUnitPercent,
    BackwUnitPercent,
    ForwUnitPercent,
};
