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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/website */ \"./src/module/website.js\");\n\n\n(0,_module_website__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/module/contact.js":
/*!*******************************!*\
  !*** ./src/module/contact.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\n\nfunction loadContact() {\n    let content = document.querySelector(\".main-content\");\n    let intro = document.createElement('div');\n    let chefName = document.createElement('div');\n    let chefContacts = document.createElement('div');\n    intro.textContent = \"Please email Mr Lee for reservation at this great Pizza House!\";\n    chefName.textContent = \"Lee De En\";\n    chefContacts.textContent = \"Email: leedeen01@gmail.com\";\n    content.appendChild(intro);\n    content.appendChild(chefName);\n    content.appendChild(chefContacts);\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/module/contact.js?");

/***/ }),

/***/ "./src/module/home.js":
/*!****************************!*\
  !*** ./src/module/home.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\n\n\nfunction loadHome() {\n    let content = document.querySelector(\".main-content\");\n    let chef = document.createElement('img');\n    chef.src = 'images/main-image.jpg';\n    content.appendChild(chef);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/module/home.js?");

/***/ }),

/***/ "./src/module/menu.js":
/*!****************************!*\
  !*** ./src/module/menu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n\nfunction loadMenu() {\n    let content = document.querySelector(\".main-content\");\n    let recipe = document.createElement('ul');\n    recipe.appendChild(newDish(\"Pepperoni Pizza\", \"It perfectly combines gooey, melted cheese, flavorful sauce, and salty pepperoni.\"));\n    recipe.appendChild(newDish(\"Cheese Pizza\", \"It has everything a good pizza needs: crust, sauce, and lots and lots of cheese. \"));\n    recipe.appendChild(newDish(\"Veggie Pizza\", \"There are always one or two people out there who don’t like pizza “because it’s too greasy.” To them, I say, “Try a veggie pizza!” \"));\n    recipe.appendChild(newDish(\"BBQ Chicken Pizza\", \"It has a sweet and tangy flavor, unlike most other pizzas you’ll try.\"));\n    recipe.appendChild(newDish(\"Meat Lovers Pizza\", \"The meat lovers’ pizza is the polar opposite of the veggie pizza above. It typically includes zero veggies and tons of meat.\"));\n    content.appendChild(recipe);\n}\n\nfunction newDish(name, description) {\n    let title = document.createElement('li');\n    let dishName = document.createElement('div');\n    let dishDesc = document.createElement('div');\n    dishName.textContent = name;\n    dishDesc.textContent = description;\n    title.appendChild(dishName);\n    title.appendChild(dishDesc);\n    return title;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/module/menu.js?");

/***/ }),

/***/ "./src/module/website.js":
/*!*******************************!*\
  !*** ./src/module/website.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initWeb)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/module/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/module/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/module/contact.js\");\n\n\n\n\nfunction header() {\n    let head = document.createElement(\"header\");\n    let title = document.createElement('h1');\n    title.classList.add(\"head\");\n    title.textContent = 'Pizza House';    \n    head.appendChild(title);\n    return head;\n}\n\nfunction navigation() {\n    let nav = document.createElement(\"nav\");\n    let homeBtn = document.createElement(\"button\");\n    homeBtn.textContent = 'Home';\n    homeBtn.addEventListener(\"click\", () => {\n        let content = document.querySelector(\".main-content\");\n        content.innerHTML=\"\";\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n    let menuBtn = document.createElement(\"button\");\n    menuBtn.textContent = 'Menu';\n    menuBtn.addEventListener(\"click\", () => {\n        let content = document.querySelector(\".main-content\");\n        content.innerHTML=\"\";\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n    let contactBtn = document.createElement(\"button\");\n    contactBtn.textContent = \"Contact\";\n    contactBtn.addEventListener(\"click\", () => {\n        let content = document.querySelector(\".main-content\");\n        content.innerHTML=\"\";\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n    nav.appendChild(homeBtn);\n    nav.appendChild(menuBtn);\n    nav.appendChild(contactBtn);\n    return nav;\n}\n\nfunction main() {\n    let welcome = document.createElement(\"main\");\n    welcome.classList.add(\"main-content\");\n    return welcome;\n}\n\nfunction initWeb() {\n    const content = document.getElementById(\"content\");\n    content.appendChild(header());\n    content.appendChild(navigation());\n    content.appendChild(main());\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n//# sourceURL=webpack://restaurant-page/./src/module/website.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;