/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/public/js/common/base.js":
/*!**************************************!*\
  !*** ./src/public/js/common/base.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchData\": () => (/* binding */ fetchData),\n/* harmony export */   \"handleMoveSlideBtn\": () => (/* binding */ handleMoveSlideBtn)\n/* harmony export */ });\nasync function fetchData(src) {\r\n    const response = await fetch(src);\r\n    return response.json();\r\n}\r\n\r\nfunction handleMoveSlideBtn({ bw, fw }, wrapper, bodyW) {\r\n    const forwBtn = document.getElementById(fw);\r\n    const backwBtn = document.getElementById(bw);\r\n    const container = document.getElementById(wrapper);\r\n    const wrapperW = Number.parseFloat(container.style.width);\r\n    backwBtn.style.display = \"none\";\r\n    function toggleBackw() {\r\n        const leftW = Number.parseFloat(container.style.left);\r\n        if (leftW == 0) {\r\n            setTimeout(() => {\r\n                backwBtn.style.display = \"none\";\r\n            }, 400);\r\n        } else {\r\n            backwBtn.style.display = \"block\";\r\n        }\r\n    }\r\n    function toggleForw() {\r\n        const leftW = Number.parseFloat(container.style.left);\r\n        if (wrapperW == bodyW + Math.abs(leftW)) {\r\n            setTimeout(() => {\r\n                forwBtn.style.display = \"none\";\r\n            }, 400);\r\n        } else {\r\n            forwBtn.style.display = \"block\";\r\n        }\r\n    }\r\n\r\n    forwBtn.onclick = () => {\r\n        setTimeout(() => {\r\n            toggleBackw();\r\n            toggleForw();\r\n        }, 100);\r\n    };\r\n    backwBtn.onclick = () => {\r\n        setTimeout(() => {\r\n            toggleBackw();\r\n            toggleForw();\r\n        }, 100);\r\n    };\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://shopee/./src/public/js/common/base.js?");

/***/ }),

/***/ "./src/public/js/common/footerScript/index.js":
/*!****************************************************!*\
  !*** ./src/public/js/common/footerScript/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base.js */ \"./src/public/js/common/base.js\");\n\r\n\r\nclass RenderFooterSupport {\r\n    static renderFooterList(data, id) {\r\n        const container = document.getElementById(id);\r\n        data.forEach((text) => {\r\n            const newItem = document.createElement(\"li\");\r\n            newItem.className = \"my-3 opacity-75\";\r\n            newItem.innerHTML = `\r\n            <a\r\n                class=\"text-decoration-none text-capitalize text-color\"\r\n                href=\"javascript:void(0)\"\r\n                >${text}\r\n            </a>\r\n            `;\r\n            container.append(newItem);\r\n        });\r\n    }\r\n    static renderFooterImg(data, id) {\r\n        const container = document.getElementById(id);\r\n        data.forEach((img) => {\r\n            const newItem = document.createElement(\"li\");\r\n            newItem.className = \"footer__support-img\";\r\n            newItem.innerHTML = `\r\n            <img\r\n                src=\"${img}\"\r\n                alt=\"photo\"\r\n            />\r\n            `;\r\n            container.append(newItem);\r\n        });\r\n    }\r\n    static async run() {\r\n        const data = (await (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.fetchData)(\"http://localhost:8080/API/footerSupport\"))[0];\r\n        RenderFooterSupport.renderFooterList(data.supportClient, \"footer__support-client\");\r\n        RenderFooterSupport.renderFooterList(data.aboutShopee, \"footer__support-about\");\r\n        RenderFooterSupport.renderFooterImg(data.paymentImg, \"footer__support-payment\");\r\n        RenderFooterSupport.renderFooterImg(data.shipping, \"footer__support-shipping\");\r\n    }\r\n}\r\nRenderFooterSupport.run();\r\n\n\n//# sourceURL=webpack://shopee/./src/public/js/common/footerScript/index.js?");

/***/ }),

/***/ "./src/public/js/common/headerScript.js":
/*!**********************************************!*\
  !*** ./src/public/js/common/headerScript.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/public/js/common/base.js\");\n\r\n\r\n// show proposes on header\r\nasync function handleProposes() {\r\n    const searchBar = document.getElementById(\"search-bar\");\r\n    const response = await (0,_base__WEBPACK_IMPORTED_MODULE_0__.fetchData)(\"http://localhost:8080/API/proposedItems\");\r\n    const headerProposes = response.filter((key) => key.name === \"header_proposes\")[0];\r\n    const proposeWrapper = document.getElementById(\"header__bottom-propose-wrapper\");\r\n    function handleClickOnProposes() {\r\n        const searchBar = document.getElementById(\"search-bar\");\r\n        const proposes = document.querySelectorAll(\".propose\");\r\n        for (const propose of proposes) {\r\n            propose.addEventListener(\"click\", () => {\r\n                searchBar.value = propose.innerText;\r\n            });\r\n        }\r\n    }\r\n    //\r\n    const proposesList = document.createElement(\"ul\");\r\n    proposesList.id = \"proposes\";\r\n    searchBar.oninput = (e) => {\r\n        const htmlList = [];\r\n        for (const elem of headerProposes) {\r\n            if (elem.startsWith(e.target.value.toLowerCase())) {\r\n                htmlList.push(`<li class=\"propose\">${elem}</li>`);\r\n                if (htmlList.length >= 5) break;\r\n            }\r\n        }\r\n        if (htmlList.length > 0) {\r\n            proposesList.innerHTML = htmlList.join(\"\");\r\n            handleClickOnProposes();\r\n        } else {\r\n            proposesList.innerHTML = \"<li class='propose'>không tìm thấy sản phẩm</li>\";\r\n        }\r\n        proposeWrapper.append(proposesList);\r\n    };\r\n    // proposes're showed when focus on search bar\r\n    (() => {\r\n        const container = document.getElementById(\"header__bottom-search-list\");\r\n        const { data } = response.filter((key) => key.name === \"header_bottom_proposes\")[0];\r\n        for (const shop of data) {\r\n            const newShop = document.createElement(\"li\");\r\n            newShop.className = \"header__bottom-search-link\";\r\n            newShop.innerHTML = `\r\n                    <a href=\"javascript:void(0)\">${shop}</a>\r\n                `;\r\n            container.append(newShop);\r\n        }\r\n    })();\r\n    searchBar.onblur = () => {\r\n        setTimeout(() => proposeWrapper.removeChild(proposesList), 200);\r\n    };\r\n}\r\n\r\nhandleProposes();\r\n\n\n//# sourceURL=webpack://shopee/./src/public/js/common/headerScript.js?");

/***/ }),

/***/ "./src/public/js/productScript/getPlaceModel.js":
/*!******************************************************!*\
  !*** ./src/public/js/productScript/getPlaceModel.js ***!
  \******************************************************/
/***/ (() => {

eval("(() => {\r\n    const closeBtn = document.querySelector(\".close-get-place-model\");\r\n    const layer = document.querySelector(\".place-layer\");\r\n    const dialog = document.querySelector(\".place-dialog\");\r\n    closeBtn.addEventListener(\"click\", () => {\r\n        dialog.style.transform = \"scale(0, 0)\";\r\n        document.body.style.overflow = \"auto\";\r\n        setTimeout(() => {\r\n            layer.style.display = \"none\";\r\n        }, 100);\r\n    });\r\n    document.querySelector(\".set-place\").onclick = () => {\r\n        layer.style.display = \"flex\";\r\n        document.body.style.overflow = \"hidden\";\r\n        setTimeout(() => {\r\n            dialog.style.transform = \"scale(1, 1)\";\r\n        });\r\n    };\r\n    document.querySelector(\".curr-place\").onclick = () => {\r\n        navigator.geolocation.getCurrentPosition(console.log);\r\n    };\r\n})();\r\n\n\n//# sourceURL=webpack://shopee/./src/public/js/productScript/getPlaceModel.js?");

/***/ }),

/***/ "./src/public/js/productScript/index.js":
/*!**********************************************!*\
  !*** ./src/public/js/productScript/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_headerScript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/headerScript */ \"./src/public/js/common/headerScript.js\");\n/* harmony import */ var _common_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/base */ \"./src/public/js/common/base.js\");\n/* harmony import */ var _common_footerScript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/footerScript */ \"./src/public/js/common/footerScript/index.js\");\n/* harmony import */ var _togglePreviewImg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./togglePreviewImg */ \"./src/public/js/productScript/togglePreviewImg.js\");\n/* harmony import */ var _togglePreviewImg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_togglePreviewImg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _getPlaceModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getPlaceModel */ \"./src/public/js/productScript/getPlaceModel.js\");\n/* harmony import */ var _getPlaceModel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_getPlaceModel__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\r\n(() => {\r\n    let num = 1;\r\n    const amount = document.querySelector(\".amount-number\");\r\n    const add = document.querySelector(\".plus-item\");\r\n    const sub = document.querySelector(\".pop-item\");\r\n    add.addEventListener(\"click\", () => {\r\n        num++;\r\n        amount.innerText = num;\r\n    });\r\n    sub.addEventListener(\"click\", () => {\r\n        if (num > 1) {\r\n            num--;\r\n            amount.innerText = num;\r\n        }\r\n    });\r\n})();\r\n\n\n//# sourceURL=webpack://shopee/./src/public/js/productScript/index.js?");

/***/ }),

/***/ "./src/public/js/productScript/togglePreviewImg.js":
/*!*********************************************************!*\
  !*** ./src/public/js/productScript/togglePreviewImg.js ***!
  \*********************************************************/
/***/ (() => {

eval("// toggle preview image\r\n(() => {\r\n    const previewingImage = document.getElementById(\"active-img\");\r\n    const trigger = document.querySelector(\".productDiv__image-lg\");\r\n    const target = document.querySelector(\".preview-img-layer\");\r\n    const dialog = document.querySelector(\".preview-dialog\");\r\n    const imgs = document.querySelectorAll(\".queuing-imgs\");\r\n    let active = 0;\r\n    imgs.forEach((elem, index) => {\r\n        elem.onclick = () => {\r\n            imgs[active].classList.remove(\"previewing-img\");\r\n            active = index;\r\n            elem.classList.add(\"previewing-img\");\r\n            const image = elem.getAttribute(\"src\");\r\n            previewingImage.style.backgroundImage = `url(${image})`;\r\n        };\r\n        window.addEventListener(\"move\", (e) => {\r\n            if (e.detail === index) elem.click();\r\n        });\r\n    });\r\n    document.querySelector(\".backward-btn\").onclick = () => {\r\n        if (active === 0) window.dispatchEvent(new CustomEvent(\"move\", { detail: imgs.length - 1 }));\r\n        else window.dispatchEvent(new CustomEvent(\"move\", { detail: active - 1 }));\r\n    };\r\n    document.querySelector(\".forward-btn\").onclick = () => {\r\n        if (active === imgs.length - 1) window.dispatchEvent(new CustomEvent(\"move\", { detail: 0 }));\r\n        else window.dispatchEvent(new CustomEvent(\"move\", { detail: active + 1 }));\r\n    };\r\n    trigger.onclick = () => {\r\n        target.style.display = \"flex\";\r\n        document.body.style.overflow = \"hidden\";\r\n    };\r\n    target.addEventListener(\"click\", (e) => {\r\n        if (!e.defaultPrevented) {\r\n            target.style.display = \"none\";\r\n            document.body.style.overflow = \"auto\";\r\n        }\r\n    });\r\n    dialog.addEventListener(\"click\", (e) => e.preventDefault());\r\n})();\r\n\n\n//# sourceURL=webpack://shopee/./src/public/js/productScript/togglePreviewImg.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/public/js/productScript/index.js");
/******/ 	
/******/ })()
;