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

/***/ "./script/index.js":
/*!*************************!*\
  !*** ./script/index.js ***!
  \*************************/
/***/ (() => {

eval("//src:  https://stackoverflow.com/questions/4597050/how-to-check-if-the-url-contains-a-given-string\r\n//window location help src: https://www.w3schools.com/js/js_window_location.asp\r\n\r\n/////////////////////////\r\n// ---- MAIN PAGE ---- //\r\n/////////////////////////\r\n\r\n//Check if url is github or not\r\nlet github = false;\r\n//src: https://stackoverflow.com/questions/21265919/location-pathname-indexof-not-working-with-or\r\nif (location.pathname.indexOf(\"web2-frontend-Matthias-VdC\") != -1) {\r\n    github = true;\r\n}\r\n\r\nlet mainPageNumber = 0;\r\n\r\nif (document.getElementById(\"body-search-list\") && !document.getElementById(\"login-form\") && document.getElementById(\"body-search-more\")) {\r\n\r\n    if (mainPageNumber == 0) {\r\n        homepageDeals();\r\n    }\r\n\r\n    function homepageDeals() {\r\n        fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1,6,10,12&sortBy=Savings&pageSize=4&pageNumber=${mainPageNumber}`)\r\n            .then(response => {\r\n                return response.json();\r\n            })\r\n            .then(data => {\r\n\r\n                console.log(\"Main page fetch!\", data);\r\n\r\n                //CHANGE BODY TO RESULTS\r\n                for (let k of data) {\r\n                    document.getElementById(\"body-search-list\").innerHTML +=\r\n                        `\r\n                                    <div class=\"body-search-list-game\">\r\n                                        <div class=\"body-search-list-game-container1\">\r\n                                            <img class=\"body-search-list-game-thumb\" src=\"${k.thumb}\">\r\n                                        </div>\r\n                                        <div class=\"body-search-list-game-container2\">\r\n                                            <p>${k.title}</p>\r\n                                            <a href=\"#\">view</a>\r\n                                            <p>${k.normalPrice} $</p>\r\n                                            <p>${k.salePrice} $</p>\r\n                                        </div>\r\n                                    </div>\r\n                                    `;\r\n                }\r\n            });\r\n    }\r\n}\r\n\r\nif (document.getElementById(\"loadMore\")) {\r\n    let loadMore = document.getElementById(\"loadMore\");\r\n\r\n    loadMore.addEventListener(\"click\", e => {\r\n        mainPageNumber += 1;\r\n        homepageDeals();\r\n    });\r\n}\n\n//# sourceURL=webpack://web2-frontend-matthias-vdc/./script/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script/index.js"]();
/******/ 	
/******/ })()
;