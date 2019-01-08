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

var _notificationMenu = __webpack_require__(434);

var _slider = __webpack_require__(435);

var _balanceMenu = __webpack_require__(436);

var tabBtn = document.querySelector('.nav');
var tabContents = document.querySelector('.main');
(0, _tabMenu.tabMenu)(tabBtn, tabContents);

var notificationBtn = document.querySelector('.header__notification');
(0, _notificationMenu.notificationMenu)(notificationBtn);

var sliderContent = document.querySelector('.next-lesson__conteiner');
var sliderBtn = document.querySelector('.next-lesson__slider');
(0, _slider.slider)(sliderContent, sliderBtn);

var balanceTabs = document.querySelector('.balance__tab');
var balanceContents = document.querySelector('.balance__conteiner');
(0, _balanceMenu.balanceMenu)(balanceTabs, balanceContents);

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

var sidebarElement = document.querySelector('.wrapper-sidebar');
window.addEventListener("orientationchange", function () {
    if (sidebarElement.classList.contains('wrapper-sidebar_opened')) sidebarElement.style.transition = 'none';
});

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

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.notificationMenu = notificationMenu;
function notificationMenu(notificationBtn) {
    // console.log(notificationBtn);
    var notification = notificationBtn.querySelector('.notification__conteiner');
    notificationBtn.addEventListener('click', function () {
        notification.classList.toggle('notification__conteiner_opened');
    });
}

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.slider = slider;
function slider(targetContent, targetToggle) {
    var contents = targetContent.querySelectorAll('.next-lesson__conteiner-information');
    var toggleArrows = targetToggle.querySelectorAll('.slider__arrow');
    var toggles = targetToggle.querySelectorAll('.slider__round');

    var activeContent = targetContent.querySelector('.next-lesson__conteiner-information_opened');
    var activeToggle = targetToggle.querySelector('.slider__round_active');

    for (var i = 0; i < contents.length; i++) {
        contents[i].setAttribute('data-id-content', i);
        toggles[i].setAttribute('data-id-toggle', i);
    }

    for (var _i = 0; _i < toggleArrows.length; _i++) {
        toggleArrows[_i].setAttribute('data-id-arrow', _i);
        toggleArrows[_i].addEventListener('click', function (event) {
            toggleSlider(event);
        });
    }

    function toggleSlider(event) {
        event.preventDefault();
        var eventID = event.target.getAttribute('data-id-arrow');
        var activeContentID = +activeContent.getAttribute('data-id-content');
        var activeToggleID = +activeToggle.getAttribute('data-id-toggle');

        if (eventID === '0' && activeContentID === 0 || eventID === '1' && activeContentID === 2) {
            return;
        }

        hideContent(activeContent);
        if (eventID === '1') {
            var index = activeContentID + 1;
            contents[index].classList.add('next-lesson__conteiner-information_opened');
            toggles[index].classList.add('slider__round_active');
            activeToggle = toggles[index];
            activeContent = contents[index];
            return;
        }

        if (eventID === '0') {
            var _index = activeContentID - 1;
            contents[_index].classList.add('next-lesson__conteiner-information_opened');
            toggles[_index].classList.add('slider__round_active');
            activeToggle = toggles[_index];
            activeContent = contents[_index];
            return;
        }
    }

    function hideContent(activeContent) {
        if (activeToggle) {
            activeToggle.classList.remove('slider__round_active');
            activeContent.classList.remove('next-lesson__conteiner-information_opened');
        }
    }
}

/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.balanceMenu = balanceMenu;
function balanceMenu(balanceTabs, balanceContents) {
    var tabs = balanceTabs.querySelectorAll('.balance__tab-content');
    var contents = balanceContents.querySelectorAll('.balance__diagram');
    var activeTab = balanceTabs.querySelector('.balance__tab-content_active');
    var activeTabContent = balanceContents.querySelector('.balance__diagram_opened');

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].setAttribute('data-tab', i);
    }

    function attachEvents() {
        balanceTabs.addEventListener('click', function (event) {
            hideTabContent(activeTabContent);
            activeTab = event.target;
            activeTabContent = contents[event.target.getAttribute('data-tab')];
            event.target.classList.add('balance__tab-content_active');
            activeTabContent.classList.add('balance__diagram_opened');
        });
    }

    function hideTabContent(content) {
        if (activeTab) {
            activeTab.classList.remove('balance__tab-content_active');
            content.classList.remove('balance__diagram_opened');
        }
    }

    attachEvents();
}

/***/ })

/******/ });