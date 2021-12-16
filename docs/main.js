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

eval("//src:  https://stackoverflow.com/questions/4597050/how-to-check-if-the-url-contains-a-given-string\r\n//window location help src: https://www.w3schools.com/js/js_window_location.asp\r\n\r\n/////////////////////////\r\n// ---- MAIN PAGE ---- //\r\n/////////////////////////\r\nlet mainPageNumber = 0;\r\n\r\nif (document.getElementById(\"body-search-list\") && !document.getElementById(\"login-form\") && document.getElementById(\"body-search-more\")) {\r\n\r\n    if (mainPageNumber == 0) {\r\n        homepageDeals();\r\n    }\r\n\r\n    function homepageDeals() {\r\n        fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1,6,10,12&sortBy=Savings&pageSize=4&pageNumber=${mainPageNumber}`)\r\n            .then(response => {\r\n                return response.json();\r\n            })\r\n            .then(data => {\r\n\r\n                console.log(\"Main page fetch!\", data);\r\n\r\n                //CHANGE BODY TO RESULTS\r\n                for (let k of data) {\r\n                    document.getElementById(\"body-search-list\").innerHTML +=\r\n                        `\r\n                                    <div class=\"body-search-list-game\">\r\n                                        <div class=\"body-search-list-game-container1\">\r\n                                            <img class=\"body-search-list-game-thumb\" src=\"${k.thumb}\">\r\n                                        </div>\r\n                                        <div class=\"body-search-list-game-container2\">\r\n                                            <p>${k.title}</p>\r\n                                            <a href=\"#\">view</a>\r\n                                            <p>${k.normalPrice} $</p>\r\n                                            <p>${k.salePrice} $</p>\r\n                                        </div>\r\n                                    </div>\r\n                                    `;\r\n                }\r\n            });\r\n    }\r\n}\r\n\r\nif (document.getElementById(\"loadMore\")) {\r\n    let loadMore = document.getElementById(\"loadMore\");\r\n\r\n    loadMore.addEventListener(\"click\", e => {\r\n        mainPageNumber += 1;\r\n        homepageDeals();\r\n    });\r\n}\r\n\r\n\r\n\r\n\r\n//////////////////////////\r\n// ---- SEARCH BOX ---- //\r\n//////////////////////////\r\n\r\n\r\n\r\ndocument.getElementById(\"header-search-form\").addEventListener(\"submit\", e => {\r\n    e.preventDefault();\r\n\r\n    sessionStorage.setItem(\"Search\", document.getElementById(\"header-search-box\").value);\r\n    location.assign(`${location.origin}/docs/search.html`);\r\n})\r\n\r\nif (location.pathname == \"/docs/search.html\") {\r\n\r\n    let searchBox = sessionStorage.getItem(\"Search\");\r\n    console.log(searchBox);\r\n    fetch(`https://www.cheapshark.com/api/1.0/deals?title=${searchBox}&storeID=1&pageSize=20&sortBy=Reviews`)\r\n        .then(response => {\r\n            return response.json();\r\n        })\r\n        .then(data => {\r\n            console.log(\"Search fetch!\", data);\r\n\r\n            //deletes previous html entries if you search again\r\n            document.getElementById(\"body-search-list\").innerHTML = ``\r\n\r\n            //CHANGE BODY TO SEARCH RESULTS\r\n            for (let k of data) {\r\n                document.getElementById(\"body-search-list\").innerHTML +=\r\n                    `\r\n                        <div class=\"body-search-list-game\">\r\n                            <div class=\"body-search-list-game-container1\">\r\n                                <img class=\"body-search-list-game-thumb\" src=\"${k.thumb}\">\r\n                            </div>\r\n                            <div class=\"body-search-list-game-container2\">\r\n                                <p>${k.title}</p>\r\n                                <a href=\"#\">view</a>\r\n                                <p>${k.normalPrice} $</p>\r\n                            </div>\r\n                        </div>\r\n                        `;\r\n            }\r\n        })\r\n}\n\n//# sourceURL=webpack://web2-frontend-matthias-vdc/./script/index.js?");

/***/ }),

/***/ "./script/login.js":
/*!*************************!*\
  !*** ./script/login.js ***!
  \*************************/
/***/ (() => {

eval("//src:  https://stackoverflow.com/questions/4597050/how-to-check-if-the-url-contains-a-given-string\r\n\r\n\r\n// Show / Hide password adapted from: https://www.w3schools.com/howto/howto_js_toggle_password.asp\r\nif (document.getElementById(\"show-password\")) {\r\n    document.getElementById(\"show-password\").addEventListener(\"click\", e => {\r\n        let pass = document.getElementById(\"login-password\");\r\n        if (pass.type === \"password\") {\r\n            pass.type = \"text\";\r\n        } else {\r\n            pass.type = \"password\";\r\n        }\r\n    })\r\n}\r\n\r\n\r\nif (document.getElementById(\"login-form\")) {\r\n    document.getElementById(\"login-form\").addEventListener(\"submit\", e => {\r\n        e.preventDefault();\r\n        let emailValue = document.getElementById(\"login-email\").value;\r\n        let passwordValue = document.getElementById(\"login-password\").value;\r\n\r\n        const credentials = {\r\n            email: emailValue,\r\n            password: passwordValue\r\n        }\r\n\r\n        fetch(`https://course-project-mvdc.herokuapp.com/userdata/login`, {\r\n                method: \"POST\",\r\n                headers: {\r\n                    \"Content-Type\": \"application/json\",\r\n                },\r\n                body: JSON.stringify(credentials)\r\n            })\r\n            .then(res => {\r\n                return res.json();\r\n            })\r\n            .then(data => {\r\n                if (data.login) {\r\n                    //getting post data source: https://stackoverflow.com/questions/29775797/fetch-post-json-data\r\n                    console.log(data);\r\n\r\n                    //Saves user id to browser\r\n                    //src:  https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage?retiredLocale=nl\r\n\r\n                    sessionStorage.setItem(\"id\", data.id);\r\n                    sessionStorage.setItem(\"login\", data.login);\r\n                    document.location.href = \"/\";\r\n                } else {\r\n                    console.log(\"Invalid credentials\");\r\n                }\r\n            })\r\n    })\r\n}\n\n//# sourceURL=webpack://web2-frontend-matthias-vdc/./script/login.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./script/index.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script/login.js"]();
/******/ 	
/******/ })()
;