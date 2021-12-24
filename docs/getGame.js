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

/***/ "./script/getGame.js":
/*!***************************!*\
  !*** ./script/getGame.js ***!
  \***************************/
/***/ (() => {

eval("fetch(`https://www.cheapshark.com/api/1.0/games?id=${sessionStorage.getItem(\"game-id\")}`)\r\n    .then(response => {\r\n        return response.json();\r\n    })\r\n    .then(data => {\r\n        console.log(\"get one game\", data);\r\n        document.getElementById(\"one-game-container\").innerHTML = `\r\n        <div id=\"one-game-info-container\">\r\n            <img id=\"one-game-image\" src=\"${data.info.thumb}\" alt=\"game image\">\r\n            <div id=\"one-game-info\">\r\n                <span class=\"icon-heart\"></span>\r\n                <p id=\"one-game-title\">${data.info.title}</p>\r\n            </div>\r\n        </div>\r\n        <div id=\"one-game-store-deals\">\r\n            <h2 id=\"one-game-store-deal-text\">Store deals:</h2>\r\n        </div>\r\n\r\n        `;\r\n\r\n        for (let i = 0; i < data.deals.length; i++) {\r\n            document.getElementById(\"one-game-store-deals\").innerHTML +=\r\n                `\r\n            <div class=\"one-game-stores\">\r\n                <p class=\"one-game-stores-retail\">Retail price: $ ${data.deals[i].retailPrice}</p>\r\n                <p class=\"one-game-stores-price\">Current price: $ ${data.deals[i].price}</p>\r\n                <p class=\"one-game-stores-savings\">Savings: ${Math.floor(data.deals[i].savings)} %</p>\r\n                <a class=\"one-game-stores-redirect\" href=\"https://www.cheapshark.com/redirect?dealID=${data.deals[i].dealID}\" target=\"_blank\">Go to deal</a>\r\n            </div>\r\n            `;\r\n        }\r\n    })\n\n//# sourceURL=webpack://web2-frontend-matthias-vdc/./script/getGame.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script/getGame.js"]();
/******/ 	
/******/ })()
;