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

/***/ "./script/search.js":
/*!**************************!*\
  !*** ./script/search.js ***!
  \**************************/
/***/ (() => {

eval("//Check if url is github or not\r\nlet github = false;\r\n//src: https://stackoverflow.com/questions/21265919/location-pathname-indexof-not-working-with-or\r\nif (location.pathname.indexOf(\"web2-frontend-Matthias-VdC\") != -1) {\r\n    github = true;\r\n}\r\n\r\ndocument.getElementById(\"header-search-form\").addEventListener(\"submit\", e => {\r\n    e.preventDefault();\r\n\r\n    sessionStorage.setItem(\"search\", document.getElementById(\"header-search-box\").value);\r\n    if (github == false) {\r\n        location.assign(`${location.origin}/docs/search.html`);\r\n    } else {\r\n        location.assign(`${location.origin}/web2-frontend-Matthias-VdC/search.html`);\r\n    }\r\n})\r\n\r\nif (location.pathname.indexOf(\"search.html\") != -1) {\r\n    let searchBox = sessionStorage.getItem(\"search\");\r\n    //filter on store\r\n    let storeFilterId = document.getElementById(\"store-names\").value;\r\n    document.getElementById(\"store-names\").addEventListener(\"change\", e => {\r\n        e.preventDefault();\r\n        storeFilterId = document.getElementById(\"store-names\").value;\r\n        fetchSearch();\r\n    })\r\n    //filter by sorting\r\n    let sortFilterId = document.getElementById(\"sorter-names\").value;\r\n    document.getElementById(\"sorter-names\").addEventListener(\"change\", e => {\r\n        e.preventDefault();\r\n        sortFilterId = document.getElementById(\"sorter-names\").value;\r\n        fetchSearch();\r\n    })\r\n\r\n    function fetchSearch() {\r\n        fetch(`https://www.cheapshark.com/api/1.0/deals?sortBy=${sortFilterId}&title=${searchBox}&storeID=${storeFilterId}&pageSize=20`)\r\n            .then(response => {\r\n                return response.json();\r\n            })\r\n            .then(data => {\r\n                console.log(\"Search fetch!\", data);\r\n\r\n                //deletes previous html entries if you search again\r\n                document.getElementById(\"body-search-list\").innerHTML = ``\r\n\r\n                //CHANGE BODY TO SEARCH RESULTS\r\n                for (let k of data) {\r\n                    document.getElementById(\"body-search-list\").innerHTML +=\r\n                        `\r\n                        <div class=\"body-search-list-game\">\r\n                            <div class=\"body-search-list-game-container1\">\r\n                                <img class=\"body-search-list-game-thumb\" src=\"${k.thumb}\">\r\n                            </div>\r\n                            <div class=\"body-search-list-game-container2\">\r\n                                <p>${k.title}</p>\r\n                                <a href=\"#\">view</a>\r\n                                <p>${k.normalPrice} $</p>\r\n                            </div>\r\n                        </div>\r\n                        `;\r\n                }\r\n            })\r\n    }\r\n    fetchSearch();\r\n}\n\n//# sourceURL=webpack://web2-frontend-matthias-vdc/./script/search.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script/search.js"]();
/******/ 	
/******/ })()
;