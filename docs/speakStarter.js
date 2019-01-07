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
/******/ 	return __webpack_require__(__webpack_require__.s = 430);
/******/ })
/************************************************************************/
/******/ ({

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(431);


/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(432);

var _tabMenu = __webpack_require__(433);

var tabBtn = document.querySelector('.nav');
var tabContents = document.querySelector('.main');

(0, _tabMenu.tabMenu)(tabBtn, tabContents);

//sidebar open
var sidebarToggle = document.querySelector('.sidebar__toggle');
var sidebar = document.querySelector('.wrapper-sidebar');
var content = document.querySelector('.wrapper__content');

sidebarToggle.addEventListener('click', function () {
    sidebar.classList.toggle('wrapper-sidebar_opened');
    content.classList.toggle('wrapper__content_hidden');
});

//next lesson open options
var lessonMenu = document.querySelectorAll('.scheduled-lesson__options');
var lessonAction = document.querySelectorAll('.next-lesson__action');

var _loop = function _loop(i) {
    lessonMenu[i].addEventListener('click', function (event) {
        event.target.classList.toggle('scheduled-lesson__options_opened');
        lessonAction[i].classList.toggle('next-lesson__action_opened');
    });
};

for (var i = 0; i < lessonMenu.length; i++) {
    _loop(i);
}

/***/ }),

/***/ 432:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tabMenu = tabMenu;
var TAB = '.nav__tab';
var CONTENT = '.main__tab-content';
var ACTIVE_TAB = 'nav__tab_active';
var ACTIVE_CONTENT = 'main__tab-content_opened';

function tabMenu(targetBtn, targetContent) {
    var tabs = targetBtn.querySelectorAll(TAB);
    var contents = targetContent.querySelectorAll(CONTENT);
    var activeTab = targetBtn.querySelector('.nav__tab_active');
    var activeTabContent = targetContent.querySelector('.main__tab-content_opened');

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].setAttribute('data-tab', i);
    }

    // из attachEvents можно выделить еще одну функцию, которая отображает контент showTabContent
    function attachEvents() {
        targetBtn.addEventListener('click', function (event) {
            hideTabContent(activeTabContent);
            activeTab = event.target;
            activeTabContent = contents[event.target.getAttribute('data-tab')];
            event.target.classList.add(ACTIVE_TAB);
            activeTabContent.classList.add(ACTIVE_CONTENT);
        });
    }

    function hideTabContent(content) {
        if (activeTab) {
            activeTab.classList.remove(ACTIVE_TAB);
            content.classList.remove(ACTIVE_CONTENT);
        }
    }

    attachEvents();
}

/***/ })

/******/ });