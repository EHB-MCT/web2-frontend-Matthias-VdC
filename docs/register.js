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

/***/ "./script/register.js":
/*!****************************!*\
  !*** ./script/register.js ***!
  \****************************/
/***/ (() => {

eval("document.getElementById(\"register-form\").addEventListener(\"submit\", e => {\r\n    e.preventDefault();\r\n\r\n\r\n    if (document.getElementById(\"register-password\").value == document.getElementById(\"verify-password\").value) {\r\n        let credentials = {\r\n            email: document.getElementById(\"register-email\").value,\r\n            password: document.getElementById(\"register-password\").value,\r\n            username: document.getElementById(\"register-name\").value\r\n        }\r\n        fetch(`https://course-project-mvdc.herokuapp.com/userdata/register`, {\r\n            method: \"POST\",\r\n            headers: {\r\n                \"Content-Type\": \"application/json\",\r\n            },\r\n            body: JSON.stringify(credentials)\r\n        }).then(e => {\r\n            const credentials = {\r\n                email: document.getElementById(\"register-email\").value,\r\n                password: document.getElementById(\"register-password\").value\r\n            }\r\n            fetch(`https://course-project-mvdc.herokuapp.com/userdata/login`, {\r\n                    method: \"POST\",\r\n                    headers: {\r\n                        \"Content-Type\": \"application/json\",\r\n                    },\r\n                    body: JSON.stringify(credentials)\r\n                })\r\n                .then(res => {\r\n                    return res.json();\r\n                })\r\n                .then(data => {\r\n                    if (data.login) {\r\n                        //getting post data source: https://stackoverflow.com/questions/29775797/fetch-post-json-data\r\n                        console.log(data);\r\n\r\n                        //Saves user id to browser\r\n                        //src:  https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage?retiredLocale=nl\r\n\r\n                        sessionStorage.setItem(\"id\", data.id);\r\n                        sessionStorage.setItem(\"login\", data.login);\r\n                        window.location.href = 'index.html';\r\n                    } else {\r\n                        console.log(\"Invalid credentials\");\r\n                    }\r\n                })\r\n        })\r\n    } else {\r\n        document.getElementById(\"matching-password\").innerHTML = `<p>Please make sure both given passwords match</p>`;\r\n    }\r\n})\n\n//# sourceURL=webpack://web2-frontend-matthias-vdc/./script/register.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script/register.js"]();
/******/ 	
/******/ })()
;