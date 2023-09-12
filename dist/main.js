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

/***/ "./src/dishes.js":
/*!***********************!*\
  !*** ./src/dishes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createDishes(){\n    const dishes = document.createElement(\"div\");\n    dishes.classList.add(\"dishes\");\n\n    dishes.appendChild(\n        createDish(\"Arugula Rolls\", \"Fresh arugula, bathing in spicy sauce and resting in a tortilla wrap\", 150, 67)\n    );\n    dishes.appendChild(\n        createDish(\"Autumn Dew Drop Juice\", \"The flavour of the mountain, contained in a single drink!\", 128, 57)\n    );\n    dishes.appendChild(\n        createDish(\"Cherry Berry Shakey\", \"A sweet cherry-rich drink beloved by both kids and adults!\", 128, 57)\n    );\n\n    return dishes;\n}\n\nfunction createDish(name, description, energy, health){\n    const dish = document.createElement(\"div\");\n    dish.classList.add(\"menu-item\");\n\n    const dishName = document.createElement(\"h2\");\n    dishName.textContent = name;\n\n    const dishDesc = document.createElement(\"p\");\n    dishDesc.textContent = description;\n\n    const dishEnergy = document.createElement(\"p\");\n    dishEnergy.textContent = energy;\n\n    const dishHealth = document.createElement(\"p\");\n    dishHealth.textContent = health;\n\n    const dishImage = document.createElement(\"img\");\n    dishImage.src = `images/dishes/${name.toLowerCase()}.png`;\n    dishImage.alt = `${name}`;\n\n    dish.appendChild(dishName);\n    dish.appendChild(dishImage);\n    dish.appendChild(dishDesc);\n    dish.appendChild(dishEnergy);\n    dish.appendChild(dishHealth);\n\n    return dish;\n}\n\nfunction loadDishes(){\n    const main = document.getElementById(\"main\");\n    main.textContent = \"\";\n    main.appendChild(createDishes());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadDishes);\n\n//# sourceURL=webpack://restaurant-page/./src/dishes.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\n\n(0,_website__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pika.js":
/*!*********************!*\
  !*** ./src/pika.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createPika(){\n    const pika = document.createElement(\"div\");\n    pika.classList.add(\"home\");\n\n    const pikaPortrait = document.createElement(\"img\");\n    pikaPortrait.src = \"images/pika-portrait.jpeg\";\n    pikaPortrait.alt = \"Pika\";\n\n    pika.appendChild(createPara(\"Aloha! You must have followed your nose!\"));\n    pika.appendChild(createPara(\"I'm Pika.\"));\n    pika.appendChild(pikaPortrait);\n    pika.appendChild(createPara(\"I own Pika's, an outdoor restaurant in the heart of the village.\"));\n\n    return pika;\n}\n\nfunction createPara(text){\n    const para = document.createElement(\"p\");\n    para.textContent = text;\n    return para;\n}\n\nfunction loadPika(){\n    const main = document.getElementById(\"main\");\n    main.textContent = \"\";\n    main.appendChild(createPika());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPika);\n\n//# sourceURL=webpack://restaurant-page/./src/pika.js?");

/***/ }),

/***/ "./src/recipes.js":
/*!************************!*\
  !*** ./src/recipes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createRecipes(){\n    const recipes = document.createElement(\"div\");\n    recipes.classList.add(\"recipes\");\n\n    recipes.appendChild(\n        createRecipe(\"Arugula Rolls\", \"Mountain Arugula\", 3, \"Hot Pepper\", 2, \"\", \"\")\n    );\n    recipes.appendChild(\n        createRecipe(\"Autumn Dew Drop Juice\", \"Autumn Drop Berry\", 1, \"Wild Plum\", 1, \"Blackberry\", 1)\n    );\n    recipes.appendChild(\n        createRecipe(\"Cherry Berry Shakey\", \"Ridge Cherry\", 1, \"Cherry\", 1, \"\", \"\")\n    );\n\n    return recipes;\n}\n\nfunction createRecipe(name, ingredient1, quantity1, ingredient2, quantity2, ingredient3, quantity3){\n    const recipe = document.createElement(\"div\");\n    recipe.classList.add(\"recipe-item\");\n\n    const recipeName = document.createElement(\"h2\");\n    recipeName.textContent = name;\n\n    const ing1 = document.createElement(\"p\");\n    ing1.textContent = ingredient1;\n\n    const qtIng1 = document.createElement(\"p\");\n    qtIng1.textContent = quantity1;\n\n    const ing2 = document.createElement(\"p\");\n    ing2.textContent = ingredient2;\n\n    const qtIng2 = document.createElement(\"p\");\n    qtIng2.textContent = quantity2;\n\n    const ing3 = document.createElement(\"p\");\n    ing3.textContent = ingredient3;\n\n    const qtIng3 = document.createElement(\"p\");\n    qtIng3.textContent = quantity3;\n    \n    const recipeImage = document.createElement(\"img\");\n    recipeImage.src = `images/dishes/${name.toLowerCase()}.png`;\n    recipeImage.alt = `${name}`;\n\n    const ing1Image = document.createElement(\"img\");\n    ing1Image.src = `images/dishes/ingredients/${ingredient1.toLowerCase()}.png`;\n    ing1Image.alt = `${ingredient1}`;\n\n    const ing2Image = document.createElement(\"img\");\n    ing2Image.src = `images/dishes/ingredients/${ingredient2.toLowerCase()}.png`;\n    ing2Image.alt = `${ingredient2}`;\n\n    const ing3Image = document.createElement(\"img\");\n    ing3Image.src = `images/dishes/ingredients/${ingredient3.toLowerCase()}.png`;\n    ing3Image.alt = `${ingredient3}`;\n\n    recipe.appendChild(recipeName);\n    recipe.appendChild(recipeImage);\n    recipe.appendChild(ing1Image);\n    recipe.appendChild(ing1);\n    recipe.appendChild(qtIng1);\n    recipe.appendChild(ing2Image);\n    recipe.appendChild(ing2);\n    recipe.appendChild(qtIng2);\n    recipe.appendChild(ing3Image);\n    recipe.appendChild(ing3);\n    recipe.appendChild(qtIng3);\n\n    return recipe;\n}\n\nfunction loadRecipes(){\n    const main = document.getElementById(\"main\");\n    main.textContent = \"\";\n    main.appendChild(createRecipes());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadRecipes);\n\n//# sourceURL=webpack://restaurant-page/./src/recipes.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pika__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pika */ \"./src/pika.js\");\n/* harmony import */ var _dishes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dishes */ \"./src/dishes.js\");\n/* harmony import */ var _recipes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipes */ \"./src/recipes.js\");\n\n\n\n\nfunction createHeader(){\n    const header = document.createElement(\"header\");\n    header.classList.add(\"header\");\n\n    const restaurantName = document.createElement(\"h1\");\n    restaurantName.classList.add(\"restarant-name\");\n    restaurantName.textContent = \"Pika's Restaurant\";\n\n    header.appendChild(restaurantName);\n    header.appendChild(createNav());\n\n    return header;\n}\n\nfunction createNav(){\n    const nav = document.createElement(\"nav\");\n\n    const pikaButton = document.createElement(\"button\");\n    pikaButton.classList.add(\"button-nav\");\n    pikaButton.textContent = \"Pika\";\n    pikaButton.addEventListener(\"click\", (e)=>{\n        if(e.target.classList.contains(\"active\")) return;\n        setActiveButton(pikaButton);\n        (0,_pika__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n\n    const dishesButton = document.createElement(\"button\");\n    dishesButton.classList.add(\"button-nav\");\n    dishesButton.textContent = \"Dishes\";\n    dishesButton.addEventListener(\"click\", (e)=>{\n        if(e.target.classList.contains(\"active\")) return;\n        setActiveButton(dishesButton);\n        (0,_dishes__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n\n    const recipesButton = document.createElement(\"button\");\n    recipesButton.classList.add(\"button-nav\");\n    recipesButton.textContent = \"Recipes\";\n    recipesButton.addEventListener(\"click\", (e)=>{\n        if(e.target.classList.contains(\"active\")) return;\n        setActiveButton(recipesButton);\n        (0,_recipes__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    })\n\n    nav.appendChild(pikaButton);\n    nav.appendChild(dishesButton);\n    nav.appendChild(recipesButton);\n\n    return nav;\n}\n\nfunction setActiveButton(button){\n    const buttons = document.querySelectorAll(\".button-nav\");\n    \n    buttons.forEach((button)=>{\n        if(button !== this){\n            button.classList.remove(\"active\");\n        }\n    });\n    button.classList.add(\"active\");\n}\n\nfunction createMain(){\n    const main = document.createElement(\"main\");\n    main.classList.add(\"main\");\n    main.setAttribute(\"id\", \"main\");\n    return main;\n}\n\nfunction createFooter(){\n    const footer = document.createElement(\"footer\");\n    footer.classList.add(\"footer\");\n\n    const copyrightText = document.createElement(\"p\");\n    copyrightText.textContent = `Copyright © ${new Date().getFullYear()} memewei`;\n\n    const githubLink = document.createElement(\"i\");\n    githubLink.href = \"https://github.com/memewei\";\n\n    const githubIcon = document.createElement(\"i\");\n    githubIcon.classList.add(\"uil\");\n    githubIcon.classList.add(\"uil-github\");\n    \n    githubLink.appendChild(githubIcon);\n    footer.appendChild(copyrightText);\n    footer.appendChild(githubLink);\n\n    return footer;\n}\n\nfunction initializePage(){\n    const content = document.getElementById(\"content\");\n    content.appendChild(createHeader());\n    content.appendChild(createMain());\n    content.appendChild(createFooter());\n\n    setActiveButton(document.querySelector(\".button-nav\"));\n    (0,_pika__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializePage);\n\n//# sourceURL=webpack://restaurant-page/./src/website.js?");

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