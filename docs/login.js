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

/***/ "./script/login.js":
/*!*************************!*\
  !*** ./script/login.js ***!
  \*************************/
/***/ (() => {

eval("//src:  https://stackoverflow.com/questions/4597050/how-to-check-if-the-url-contains-a-given-string\r\n\r\n\r\n// Show / Hide password adapted from: https://www.w3schools.com/howto/howto_js_toggle_password.asp\r\nif (document.getElementById(\"show-password\")) {\r\n    document.getElementById(\"show-password\").addEventListener(\"click\", e => {\r\n        let pass = document.getElementById(\"login-password\");\r\n        if (pass.type === \"password\") {\r\n            pass.type = \"text\";\r\n        } else {\r\n            pass.type = \"password\";\r\n        }\r\n    })\r\n}\r\n\r\n//Check if url is github or not\r\nlet github = false;\r\n//src: https://stackoverflow.com/questions/21265919/location-pathname-indexof-not-working-with-or\r\nif (location.pathname.indexOf(\"web2-frontend-Matthias-VdC\") != -1) {\r\n    github = true;\r\n}\r\n\r\n\r\nif (document.getElementById(\"login-form\")) {\r\n    document.getElementById(\"login-form\").addEventListener(\"submit\", e => {\r\n        e.preventDefault();\r\n        let emailValue = document.getElementById(\"login-email\").value;\r\n        let passwordValue = document.getElementById(\"login-password\").value;\r\n\r\n        const credentials = {\r\n            email: emailValue,\r\n            password: passwordValue\r\n        }\r\n\r\n        fetch(`https://course-project-mvdc.herokuapp.com/userdata/login`, {\r\n                method: \"POST\",\r\n                headers: {\r\n                    \"Content-Type\": \"application/json\",\r\n                },\r\n                body: JSON.stringify(credentials)\r\n            })\r\n            .then(res => {\r\n                return res.json();\r\n            })\r\n            .then(data => {\r\n                if (data.login) {\r\n                    //getting post data source: https://stackoverflow.com/questions/29775797/fetch-post-json-data\r\n                    console.log(data);\r\n\r\n                    //Saves user id to browser\r\n                    //src:  https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage?retiredLocale=nl\r\n\r\n                    sessionStorage.setItem(\"id\", data.id);\r\n                    sessionStorage.setItem(\"login\", data.login);\r\n                    window.location.href = 'index.html';\r\n                } else {\r\n                    console.log(\"Invalid credentials\");\r\n                }\r\n            })\r\n    })\r\n}\n\n//# sourceURL=webpack://web2-frontend-matthias-vdc/./script/login.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script/login.js"]();
/******/ 	
/******/ })()
;