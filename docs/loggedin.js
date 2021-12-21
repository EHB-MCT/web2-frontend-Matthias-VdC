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

/***/ "./script/loggedin.js":
/*!****************************!*\
  !*** ./script/loggedin.js ***!
  \****************************/
/***/ (() => {

eval("//If user is logged in\r\nif (sessionStorage.getItem(\"login\") || sessionStorage.getItem(\"id\")) {\r\n    document.getElementById(\"header-profile\").innerHTML = `<a href=\"./profile.html\" id=\"header-profile-link\"><img id=\"profile-icon\" src=\"./images/abstract-user-flat-4.svg\" alt=\"profile picture\"></a>`;\r\n}\n\n//# sourceURL=webpack://web2-frontend-matthias-vdc/./script/loggedin.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script/loggedin.js"]();
/******/ 	
/******/ })()
;