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

/***/ "./script/index.js":
/*!*************************!*\
  !*** ./script/index.js ***!
  \*************************/
/***/ (() => {

eval("\r\n\r\n\r\nwindow.onload = async function () {\r\n\r\n    /////////////////////////\r\n    // ---- MAIN PAGE ---- //\r\n    /////////////////////////\r\n    let mainPageNumber = 0;\r\n\r\n    if (mainPageNumber == 0) {\r\n        homepageDeals();\r\n    }\r\n\r\n    function homepageDeals() {\r\n        fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1,6,10,12&sortBy=Savings&pageSize=4&pageNumber=${mainPageNumber}`)\r\n            .then(response => {\r\n                return response.json();\r\n            })\r\n            .then(data => {\r\n\r\n                console.log(\"Main page fetch!\", data);\r\n\r\n                //CHANGE BODY TO RESULTS\r\n                for (let k of data) {\r\n                    document.getElementById(\"body-search-list\").innerHTML +=\r\n                        `\r\n                                    <div class=\"body-search-list-game\">\r\n                                        <div class=\"body-search-list-game-container1\">\r\n                                            <img class=\"body-search-list-game-thumb\" src=\"${k.thumb}\">\r\n                                        </div>\r\n                                        <div class=\"body-search-list-game-container2\">\r\n                                            <p>${k.title}</p>\r\n                                            <a href=\"#\">view</a>\r\n                                            <p>${k.normalPrice} $</p>\r\n                                            <p>${k.salePrice} $</p>\r\n                                        </div>\r\n                                    </div>\r\n                                    `;\r\n                }\r\n            });\r\n    }\r\n    let loadMore = document.getElementById(\"loadMore\");\r\n\r\n    loadMore.addEventListener(\"click\", e => {\r\n        mainPageNumber += 1;\r\n        homepageDeals();\r\n    });\r\n\r\n\r\n\r\n\r\n    //////////////////////////\r\n    // ---- LOGIN PAGE ---- //\r\n    //////////////////////////\r\n\r\n\r\n\r\n\r\n    //////////////////////////\r\n    // ---- SEARCH BOX ---- //\r\n    //////////////////////////\r\n\r\n    document.getElementById(\"header-search-form\").addEventListener(\"submit\", e => {\r\n        e.preventDefault();\r\n\r\n        //Remove load more\r\n        document.getElementById(\"body-search-more\").innerHTML = ``;\r\n\r\n        let searchBox = document.getElementById(\"header-search-box\").value;\r\n        console.log(searchBox);\r\n        fetch(`https://www.cheapshark.com/api/1.0/deals?title=${searchBox}&storeID=1&pageSize=20&sortBy=Reviews`)\r\n            .then(response => {\r\n                return response.json();\r\n            })\r\n            .then(data => {\r\n                console.log(\"Search fetch!\", data);\r\n\r\n                //deletes previous html entries if you search again\r\n                document.getElementById(\"body-search-list\").innerHTML = ``\r\n\r\n                //CHANGE BODY TO SEARCH RESULTS\r\n                for (let k of data) {\r\n                    document.getElementById(\"body-search-list\").innerHTML +=\r\n                        `\r\n                        <div class=\"body-search-list-game\">\r\n                            <div class=\"body-search-list-game-container1\">\r\n                                <img class=\"body-search-list-game-thumb\" src=\"${k.thumb}\">\r\n                            </div>\r\n                            <div class=\"body-search-list-game-container2\">\r\n                                <p>${k.title}</p>\r\n                                <a href=\"#\">view</a>\r\n                                <p>${k.normalPrice} $</p>\r\n                            </div>\r\n                        </div>\r\n                        `;\r\n                }\r\n            })\r\n    });\r\n\r\n\r\n}\n\n//# sourceURL=webpack://web2-frontend-matthias-vdc/./script/index.js?");

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