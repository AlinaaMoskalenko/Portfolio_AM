/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 380);
/******/ })
/************************************************************************/
/******/ ({

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(381);


/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(382);

var _articleMenu = __webpack_require__(383);

var articleHtmlElements = document.querySelectorAll('.wrapper');

for (var i = 0; i < articleHtmlElements.length; i++) {
    (0, _articleMenu.articleMenu)(articleHtmlElements[i]);
}

/***/ }),

/***/ 382:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.articleMenu = articleMenu;
function articleMenu(targetElement) {
    var ACTIVE_ARTICLE_CLASS_NAME = 'article_active';
    var articles = targetElement.querySelectorAll('.article');
    var articleArrows = targetElement.querySelectorAll('.article__arrow-list');
    var activeElement = void 0;
    var activeIterator = void 0;

    function openArticleMenu(element, i) {
        if (activeElement !== undefined && activeIterator !== i) {
            activeElement.classList.remove(ACTIVE_ARTICLE_CLASS_NAME);
        }

        activeElement = element;
        activeIterator = i;
        element.classList.toggle(ACTIVE_ARTICLE_CLASS_NAME);
    }

    var _loop = function _loop(i) {
        articleArrows[i].onclick = function () {
            openArticleMenu(articles[i], i);
        };
    };

    for (var i = 0; i < articleArrows.length; i++) {
        _loop(i);
    }
}

/***/ })

/******/ });