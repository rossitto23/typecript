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

/***/ "./src/docs/generics.ts":
/*!******************************!*\
  !*** ./src/docs/generics.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"identity\": () => (/* binding */ identity),\n/* harmony export */   \"identity2\": () => (/* binding */ identity2)\n/* harmony export */ });\n/**\r\n * Partie 5 - Generics\r\n */\r\nfunction identity(arg) {\r\n    return arg;\r\n}\r\nfunction identity2(arg) {\r\n    return arg;\r\n}\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/docs/generics.ts?");

/***/ }),

/***/ "./src/docs/narrowing.ts":
/*!*******************************!*\
  !*** ./src/docs/narrowing.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TUser\": () => (/* binding */ TUser),\n/* harmony export */   \"exempleN\": () => (/* binding */ exempleN),\n/* harmony export */   \"isDate\": () => (/* binding */ isDate),\n/* harmony export */   \"isUser\": () => (/* binding */ isUser),\n/* harmony export */   \"printId\": () => (/* binding */ printId)\n/* harmony export */ });\n/**\r\n * Partie 3 - Narrowing\r\n * Permettre de réduire la liste des types disponibles\r\n */\r\nvar btn1 = document.querySelector('#increment'); // Element | null\r\nvar btn2 = document.querySelector('#increment'); // Element\r\nvar btn3 = document.querySelector('#increment'); // HTMLButtonElement\r\n// Attention pour btn2 et btn\", vous empêchez le querySelector de\r\n// fonctionner correctement en cas de null.\r\n// Le mieux sera d'utiliser des conditions au lieu du narrowing '!' ou 'as'\r\n// Autre exemple\r\nvar btn_dec = function (event) {\r\n    event.preventDefault();\r\n    var input = document.querySelector('#res');\r\n    if (input) {\r\n    }\r\n    else {\r\n    }\r\n};\r\nfunction printId(id) {\r\n    if (id) {\r\n        // Soit dans un string soit dans un number\r\n        if (typeof id === \"number\") {\r\n            // number\r\n            console.log('id NUMBER:>> ', id);\r\n        }\r\n        else {\r\n            var tmpId = parseInt(id);\r\n            console.log('id STRING >', id);\r\n        }\r\n    }\r\n    else {\r\n        // null\r\n        id = 42;\r\n        console.log('id :>> ', id);\r\n    }\r\n}\r\n// Autre exemple (double variables locales)\r\nfunction exempleN(a, b) {\r\n    if (a === b) {\r\n        console.log('a :>> ', a);\r\n        // Ici il sera d'office en string.\r\n        // Le seul point commun entre a et b est string\r\n    }\r\n}\r\n// Autre exemple\r\nfunction exempleOperateur(a) {\r\n    // Exemple si a était un MouseEvent\r\n    // MouseEvent étant un type de TypeScript, il n'est pas reconnu pr le typeof de natif dejs\r\n    // if( typeof === a ) // marche pas\r\n    if (\"value\" in a) {\r\n        // value est une propriété de HTMLInputElement\r\n    }\r\n    else if (\"toto\" in a) {\r\n        console.log('TOTO :>> ', a); // Ne rentrera jamais \r\n    }\r\n    else {\r\n        console.log('Mouse Event :>> ', a);\r\n    }\r\n}\r\n// Autre cas\r\n// Je veux définir obligatoirement un retour Date sur a\r\nfunction isDate(a) {\r\n    return a instanceof Date;\r\n}\r\n// Cas plus concret \r\nvar TUser = /** @class */ (function () {\r\n    function TUser(name) {\r\n        this.name = name;\r\n    }\r\n    return TUser;\r\n}());\r\n\r\nfunction isUser(a) {\r\n    return a instanceof TUser;\r\n}\r\n// On aurait très bien pu mettre un booléen en retour de la fonction\r\n// Mais dans la lecture de la documentation au survol de la fonction\r\n// Il est plus intéressant de savoir que le retour d'un booléen sera\r\n// Sur un TUser et non d'un booléen\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/docs/narrowing.ts?");

/***/ }),

/***/ "./src/docs/types.ts":
/*!***************************!*\
  !*** ./src/docs/types.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mesTypes\": () => (/* binding */ mesTypes)\n/* harmony export */ });\n/**\r\n * Partie 1 - Types\r\n */\r\nvar a = 'Hello wolrd!';\r\nvar b = 42;\r\nvar c = true;\r\nvar d = null;\r\nvar e = ['a', 'b', 'c'];\r\nvar f = ['a', 'e', 'f'];\r\nvar g = [1, 2, 3, 4];\r\nvar h = ['Hello', true, 5, [], {}, function () { }];\r\nvar i = {};\r\nvar j = { firstname: 'Nicolas', lastname: 'Rossitto' };\r\nvar k = { coucou: 'Hello' };\r\nvar l = new Date();\r\nvar m = function () { };\r\nvar n = function () { };\r\nvar o = function (i, s, b) { return ['a', 'b']; };\r\nvar p = function () { throw new Error('Not implemented'); };\r\nvar q = 'a';\r\nq = 1;\r\nq = true;\r\n// const r: HTMLSpanElement = new HTMLSpanElement();\r\n// const s: Element = new Element();\r\nvar mesTypes = { a: a, b: b, c: c, d: d, e: e, f: f, g: g, h: h, i: i, j: j, k: k, l: l, m: m, n: n, o: o, p: p, q: q };\r\n// Export grâce à export, un objet lambda qui contiendra toutes les variables\r\n// Ce qui par la suite nous évitera des erreurs de nommages de variables déjà existantes.\r\n// Attention à l'indexation\r\nvar ob = { 0: 'Quentin', 1: 42, 2: true }; // Tableau classique (clef: number)\r\nconsole.log(ob[0]);\r\n// L'indéxation transforme fictivement mon objet en tableau associatif\r\nvar obj = { firstname: 'Quentin', lastname: 'Geerts', age: 26 };\r\nconsole.log(obj.firstname);\r\nconsole.log(obj['firstname']);\r\n// Attention que la dernière versoin est la moins propre\r\n// Dangereux en cas de undifined ou unknown\r\n// Exercice 01\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/docs/types.ts?");

/***/ }),

/***/ "./src/exercices.ts":
/*!**************************!*\
  !*** ./src/exercices.ts ***!
  \**************************/
/***/ (() => {

eval("/**\r\n * Partie 1 - Exercice 01\r\n */\r\n/**\r\n * Créer un code permettant de créer un compteur classique, avec +1, -1 et =...,\r\n * il faudra typé le tout au maximum, préparer 2 fonctions pour ca\r\n */\r\nvar btnMoins = document.querySelector('#btnMoins');\r\nvar btnPlus = document.querySelector('#btnPlus');\r\nvar total = document.querySelector('#total');\r\nvar valeur;\r\nif (total)\r\n    valeur = parseInt(total.innerText);\r\nvar increment = function () {\r\n    if (total)\r\n        total.innerText = (++valeur).toString();\r\n};\r\nvar decrement = function () {\r\n    if (total)\r\n        total.innerText = (--valeur).toString();\r\n};\r\nbtnMoins === null || btnMoins === void 0 ? void 0 : btnMoins.addEventListener('click', decrement);\r\nbtnPlus === null || btnPlus === void 0 ? void 0 : btnPlus.addEventListener('click', increment);\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/exercices.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _docs_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docs/types */ \"./src/docs/types.ts\");\n/* harmony import */ var _docs_narrowing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./docs/narrowing */ \"./src/docs/narrowing.ts\");\n/* harmony import */ var _docs_generics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./docs/generics */ \"./src/docs/generics.ts\");\n/**\r\n * Partie 1 - Types\r\n */\r\nconsole.warn(\"Partie 1 - Types\");\r\n\r\nconsole.log('mesTypes.a :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.a);\r\nconsole.log('mesTypes.b :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.b);\r\nconsole.log('mesTypes.c :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.c);\r\nconsole.log('mesTypes.d :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.d);\r\nconsole.log('mesTypes.e :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.e);\r\nconsole.log('mesTypes.f :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.f);\r\nconsole.log('mesTypes.g :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.g);\r\nconsole.log('mesTypes.h :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.h);\r\nconsole.log('mesTypes.i :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.i);\r\nconsole.log('mesTypes.j :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.j);\r\nconsole.log('mesTypes.k :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.k);\r\nconsole.log('mesTypes.l :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.l);\r\nconsole.log('mesTypes.m :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.m);\r\nconsole.log('mesTypes.n :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.n);\r\nconsole.log('mesTypes.o :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.o);\r\nconsole.log('mesTypes.p :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.p);\r\nconsole.log('mesTypes.q :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.q);\r\n/**\r\n * Partie 2 - Assertion de types\r\n */\r\nconsole.warn(\"Partie 2 - Assertion de types\");\r\n// voir src/docs/assertionTypes.ts\r\n/**\r\n * Partie 3 - Narrowing\r\n */\r\nconsole.warn(\"Partie 3 - Narrowing\");\r\n\r\n(0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.printId)(12);\r\n(0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.printId)('a');\r\n(0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.printId)(null);\r\n(0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.exempleN)('a', 'a');\r\nvar birthDate = new Date('01/03/1997');\r\nconsole.log('isDate(birthDate) :>> ', (0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.isDate)(birthDate));\r\nconsole.log('isDate(\"01/03/1997\") :>> ', (0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.isDate)('01/03/1997'));\r\n/**\r\n * Partie 4 - Custom Types\r\n */\r\nconsole.warn(\"Partie 4 - Custom Types\");\r\nvar admin = {\r\n    roleId: 0,\r\n    lastName: \"Rossitto\",\r\n    firstName: \"Nicolas\"\r\n};\r\nvar admin2 = {\r\n    roleId: 0,\r\n    lastName: \"test\",\r\n    firstName: \"test\"\r\n};\r\nconsole.log('admin :>> ', admin);\r\nvar idInt = 45;\r\nvar idString = 'a';\r\nconsole.log('idInt :>> ', idInt);\r\nconsole.log('idString :>> ', idString);\r\n/**\r\n * Partie 5 - Generics\r\n */\r\nconsole.warn(\"Partie 5 - Generics\");\r\n\r\nvar id1 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity)(3);\r\nconsole.log('id1 :>> ', id1);\r\nvar id2 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity2)('hello');\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

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
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/exercices.ts");
/******/ 	
/******/ })()
;