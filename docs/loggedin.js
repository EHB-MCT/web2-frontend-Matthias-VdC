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

eval("//If user is logged in\r\nif (sessionStorage.getItem(\"login\")) {\r\n\r\n    let userData = JSON.parse(sessionStorage.getItem(\"userData\"));\r\n\r\n    if (userData) {\r\n        document.getElementById(\"header-profile\").innerHTML = `<a href=\"./profile.html\" id=\"header-profile-link\"><img id=\"profile-icon\" src=\"./images/abstract-user-flat-4.svg\" alt=\"profile picture\">${userData.username}</a>`;\r\n    }\r\n\r\n    //prevent rare errors\r\n    if (sessionStorage.getItem(\"id\")) {\r\n        fetch(`https://course-project-mvdc.herokuapp.com/userdata/get/one/${sessionStorage.getItem(\"id\")}`)\r\n            .then(response => {\r\n                return response.json();\r\n            })\r\n            .then(data => {\r\n                // https://stackoverflow.com/questions/6193574/save-javascript-objects-in-sessionstorage\r\n                sessionStorage.setItem(\"userData\", JSON.stringify(data));\r\n                sessionStorage.removeItem(\"id\");\r\n\r\n                //Reload checker used from src: https://stackoverflow.com/questions/55075002/is-it-possible-to-add-a-javascript-for-while-loop-for-location-reload\r\n                if (typeof (localStorage.getItem('rlcount')) == 'undefined') {\r\n                    localStorage.setItem('rlcount', 0);\r\n                }\r\n                if (localStorage.getItem('rlcount') < 2) {\r\n                    localStorage.setItem('rlcount', localStorage.getItem('rlcount') + 1);\r\n                    window.location.reload();\r\n                } else {\r\n                    localStorage.removeItem('rlcount');\r\n                }\r\n            })\r\n    }\r\n\r\n    if (document.getElementById(\"profile-username-cancel\")) {\r\n        console.log(\"cancel\");\r\n        document.getElementById(\"profile-username-cancel\").addEventListener(\"click\", e => {\r\n            e.preventDefault();\r\n            document.getElementById(\"profile-username-container\").innerHTML = `\r\n        <p id=\"profile-username\">Username: </p>\r\n        <button id=\"profile-username-change\">change</button>\r\n        `;\r\n        });\r\n    }\r\n\r\n    if (document.getElementById(\"profile-email-container\")) {\r\n        document.getElementById(\"profile-email-container\").innerHTML = `\r\n        <p>Email: ${userData.email}</p>\r\n    `;\r\n    }\r\n\r\n    //if user clicks on profile\r\n    if (document.getElementById(\"profile-container\")) {\r\n        document.getElementById(\"profile-username\").innerText = `Username: ${userData.username}`;\r\n\r\n        document.getElementById(\"profile-username-change\").addEventListener(\"click\", e => {\r\n            e.preventDefault();\r\n            document.getElementById(\"profile-username-container\").innerHTML = `\r\n            <p id=\"profile-username\">Username: </p>\r\n            <input type=\"text\" id=\"profile-username-changer\">\r\n            <a href=\"#/\" id=\"profile-username-submit\">submit</a>\r\n            <a href=\"#/\" id=\"profile-username-cancel\">cancel</a>\r\n            `;\r\n        })\r\n\r\n\r\n        document.getElementById(\"profile-delete-button\").addEventListener(\"click\", p => {\r\n            p.preventDefault();\r\n            fetch(`https://course-project-mvdc.herokuapp.com/userdata/delete/${userData._id}`, {\r\n                    method: \"DELETE\",\r\n                    headers: {\r\n                        'Content-Type': 'application/json',\r\n                    }\r\n                })\r\n                .then(response => {\r\n                    return response.json()\r\n                })\r\n                .then(data => {\r\n                    console.log('Profile removed successfully:', data);\r\n                    sessionStorage.clear();\r\n                    window.location.href = 'index.html';\r\n                })\r\n        });\r\n        if (document.getElementById(\"profile-username-submit\")) {\r\n            document.getElementById(\"profile-username-submit\").addEventListener(\"click\", a => {\r\n                a.preventDefault();\r\n                const usernameUpdate = {\r\n                    \"username\": document.getElementById(\"profile-username-changer\").value\r\n                }\r\n                fetch(`https://course-project-mvdc.herokuapp.com/userdata/change/name/${userData._id}`, {\r\n                        method: \"PUT\",\r\n                        headers: {\r\n                            \"Content-Type\": \"application/json\",\r\n                        },\r\n                        body: JSON.stringify(usernameUpdate)\r\n                    }).then(res => {\r\n                        res.json()\r\n                    })\r\n                    .then(data => {\r\n                        console.log(data);\r\n                        location.reload();\r\n                    });\r\n            });\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://web2-frontend-matthias-vdc/./script/loggedin.js?");

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