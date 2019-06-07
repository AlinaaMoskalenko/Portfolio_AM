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
/******/ 	return __webpack_require__(__webpack_require__.s = 388);
/******/ })
/************************************************************************/
/******/ ({

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(389);


/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(390);

var _tabMenu = __webpack_require__(391);

var tabHtmlTitles = document.querySelector('.article-title');
var tabHtmlContents = document.querySelector('.article-content');

(0, _tabMenu.tabMenu)(tabHtmlTitles, tabHtmlContents);

/***/ }),

/***/ 390:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tabMenu = tabMenu;
var ARTICLE_TITLE = '.article-title__title';
var ARTICLE_CONTENT = '.article-content__content';
var ACTIVE_TITLE_TAB = 'article-title__title_active';
var ACTIVE_CONTENT = 'article-content__content_active';

function tabMenu(targetTitle, targetContent) {
    var titles = targetTitle.querySelectorAll(ARTICLE_TITLE);
    var contents = targetContent.querySelectorAll(ARTICLE_CONTENT);
    var activeTab = targetTitle.querySelector('.article-title__title_active');
    var activeTabContent = targetContent.querySelector('.article-content__content_active');

    for (var i = 0; i < titles.length; i++) {
        titles[i].setAttribute('data-title', i);
    }

    // из attachEvents можно выделить еще одну функцию, которая отображает контент showTabContent
    function attachEvents() {
        targetTitle.addEventListener('click', function (event) {
            hideTabContent(activeTabContent);
            activeTab = event.target;
            activeTabContent = contents[event.target.getAttribute('data-title')];
            event.target.classList.add(ACTIVE_TITLE_TAB);
            activeTabContent.classList.add(ACTIVE_CONTENT);
        });
    }

    function hideTabContent(content) {
        if (activeTab) {
            activeTab.classList.remove(ACTIVE_TITLE_TAB);
            content.classList.remove(ACTIVE_CONTENT);
        }
    }

    attachEvents();
}

/***/ })

/******/ });