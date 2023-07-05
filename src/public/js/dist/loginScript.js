/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/public/js/common/base.js":
/*!**************************************!*\
  !*** ./src/public/js/common/base.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchData\": () => (/* binding */ fetchData),\n/* harmony export */   \"handleMoveSlideBtn\": () => (/* binding */ handleMoveSlideBtn)\n/* harmony export */ });\nasync function fetchData(src) {\r\n    const response = await fetch(src);\r\n    return response.json();\r\n}\r\n\r\nfunction handleMoveSlideBtn({ bw, fw }, wrapper, bodyW) {\r\n    const forwBtn = document.getElementById(fw);\r\n    const backwBtn = document.getElementById(bw);\r\n    const container = document.getElementById(wrapper);\r\n    const wrapperW = Number.parseFloat(container.style.width);\r\n    backwBtn.style.display = \"none\";\r\n    function toggleBackw() {\r\n        const leftW = Number.parseFloat(container.style.left);\r\n        if (leftW == 0) {\r\n            setTimeout(() => {\r\n                backwBtn.style.display = \"none\";\r\n            }, 400);\r\n        } else {\r\n            backwBtn.style.display = \"block\";\r\n        }\r\n    }\r\n    function toggleForw() {\r\n        const leftW = Number.parseFloat(container.style.left);\r\n        if (wrapperW == bodyW + Math.abs(leftW)) {\r\n            setTimeout(() => {\r\n                forwBtn.style.display = \"none\";\r\n            }, 400);\r\n        } else {\r\n            forwBtn.style.display = \"block\";\r\n        }\r\n    }\r\n\r\n    forwBtn.onclick = () => {\r\n        setTimeout(() => {\r\n            toggleBackw();\r\n            toggleForw();\r\n        }, 100);\r\n    };\r\n    backwBtn.onclick = () => {\r\n        setTimeout(() => {\r\n            toggleBackw();\r\n            toggleForw();\r\n        }, 100);\r\n    };\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://shopee/./src/public/js/common/base.js?");

/***/ }),

/***/ "./src/public/js/common/footerScript/index.js":
/*!****************************************************!*\
  !*** ./src/public/js/common/footerScript/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base.js */ \"./src/public/js/common/base.js\");\n\r\n\r\nclass RenderFooterSupport {\r\n    static renderFooterList(data, id) {\r\n        const container = document.getElementById(id);\r\n        data.forEach((text) => {\r\n            const newItem = document.createElement(\"li\");\r\n            newItem.className = \"my-3 opacity-75\";\r\n            newItem.innerHTML = `\r\n            <a\r\n                class=\"text-decoration-none text-capitalize text-color\"\r\n                href=\"javascript:void(0)\"\r\n                >${text}\r\n            </a>\r\n            `;\r\n            container.append(newItem);\r\n        });\r\n    }\r\n    static renderFooterImg(data, id) {\r\n        const container = document.getElementById(id);\r\n        data.forEach((img) => {\r\n            const newItem = document.createElement(\"li\");\r\n            newItem.className = \"footer__support-img\";\r\n            newItem.innerHTML = `\r\n            <img\r\n                src=\"${img}\"\r\n                alt=\"photo\"\r\n            />\r\n            `;\r\n            container.append(newItem);\r\n        });\r\n    }\r\n    static async run() {\r\n        const data = (await (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.fetchData)(\"http://localhost:8080/API/footerSupport\"))[0];\r\n        RenderFooterSupport.renderFooterList(data.supportClient, \"footer__support-client\");\r\n        RenderFooterSupport.renderFooterList(data.aboutShopee, \"footer__support-about\");\r\n        RenderFooterSupport.renderFooterImg(data.paymentImg, \"footer__support-payment\");\r\n        RenderFooterSupport.renderFooterImg(data.shipping, \"footer__support-shipping\");\r\n    }\r\n}\r\nRenderFooterSupport.run();\r\n\n\n//# sourceURL=webpack://shopee/./src/public/js/common/footerScript/index.js?");

/***/ }),

/***/ "./src/public/js/loginScript/index.js":
/*!********************************************!*\
  !*** ./src/public/js/loginScript/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/base */ \"./src/public/js/common/base.js\");\n/* harmony import */ var _common_footerScript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/footerScript */ \"./src/public/js/common/footerScript/index.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://shopee/./src/public/js/loginScript/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/public/js/loginScript/index.js");
/******/ 	
/******/ })()
;