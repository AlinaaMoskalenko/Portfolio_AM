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
/******/ 	return __webpack_require__(__webpack_require__.s = 431);
/******/ })
/************************************************************************/
/******/ ({

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tabMenu = tabMenu;
function tabMenu(targetBtn, targetContent, props) {
    var tabs = targetBtn.querySelectorAll(props.TAB);
    var contents = targetContent.querySelectorAll(props.CONTENT);
    var activeTab = targetBtn.querySelector(props.CLASS_ACTIVE_TAB);
    var activeTabContent = targetContent.querySelector(props.CLASS_ACTIVE_CONTENT);

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].setAttribute('data-tab', i);
    }

    function attachEvents() {
        targetBtn.addEventListener('click', function (event) {
            hideTabContent(activeTabContent);
            activeTab = event.target;
            activeTabContent = contents[event.target.getAttribute('data-tab')];
            event.target.classList.add(props.ACTIVE_TAB);
            activeTabContent.classList.add(props.ACTIVE_CONTENT);
        });
    }

    function hideTabContent(content) {
        if (activeTab) {
            activeTab.classList.remove(props.ACTIVE_TAB);
            content.classList.remove(props.ACTIVE_CONTENT);
        }
    }

    attachEvents();
}

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(432);


/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(433);

var _notificationMenu = __webpack_require__(434);

var _sliderMenu = __webpack_require__(435);

var _balanceMenu = __webpack_require__(436);

var _lessonMenu = __webpack_require__(437);

var tabBtn = document.querySelector('.nav');
var tabContents = document.querySelector('.main');
(0, _lessonMenu.lessonMenu)(tabBtn, tabContents);

var notificationBtn = document.querySelector('.header__notification');
(0, _notificationMenu.notificationMenu)(notificationBtn);

var sliderContent = document.querySelector('.next-lesson__conteiner');
var sliderBtn = document.querySelector('.next-lesson__slider');
(0, _sliderMenu.sliderMenu)(sliderContent, sliderBtn);

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
var lessonOption = document.querySelectorAll('.scheduled-lesson__options');
var lessonAction = document.querySelectorAll('.next-lesson__action');

var _loop = function _loop(i) {
    lessonOption[i].addEventListener('click', function (event) {
        event.target.classList.toggle('scheduled-lesson__options_opened');
        lessonAction[i].classList.toggle('next-lesson__action_opened');
    });
};

for (var i = 0; i < lessonOption.length; i++) {
    _loop(i);
}

var sidebarElement = document.querySelector('.wrapper-sidebar');
window.addEventListener("orientationchange", function () {
    if (sidebarElement.classList.contains('wrapper-sidebar_opened')) sidebarElement.style.transition = 'none';
});

/***/ }),

/***/ 433:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.notificationMenu = notificationMenu;
function notificationMenu(notificationBtn) {
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
exports.sliderMenu = sliderMenu;
var CLASS_CONTENT = '.next-lesson__conteiner-information';
var CLASS_TOGGLE_ARROW = '.slider__arrow';
var CLASS_INDECATOR = '.slider__round';
var ACTIVE_CONTENT = '.next-lesson__conteiner-information_opened';
var ACTIVE_INDECATOR = '.slider__round_active';

var CLASS_ACTIVE_CONTENT = 'next-lesson__conteiner-information_opened';
var CLASS_ACTIVE_INDECATOR = 'slider__round_active';

function sliderMenu(targetContent, targetToggle) {
    var contents = targetContent.querySelectorAll(CLASS_CONTENT);
    var toggleArrows = targetToggle.querySelectorAll(CLASS_TOGGLE_ARROW);
    var toggles = targetToggle.querySelectorAll(CLASS_INDECATOR);

    var activeContent = targetContent.querySelector(ACTIVE_CONTENT);
    var activeToggle = targetToggle.querySelector(ACTIVE_INDECATOR);

    for (var i = 0; i < contents.length; i++) {
        contents[i].setAttribute('data-id-content', i);
        toggles[i].setAttribute('data-id-toggle', i);
    }

    changeArrow();
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

        if (activeContentID === 2) {
            toggleArrows[1].classList.remove('slider__arrow_active');
            toggleArrows[0].classList.add('slider__arrow_active');
        }

        if (activeContentID === 0) {
            toggleArrows[0].classList.remove('slider__arrow_active');
            toggleArrows[1].classList.add('slider__arrow_active');
        }

        if (eventID === '0' && activeContentID === 0 || eventID === '1' && activeContentID === 2) {
            return;
        }

        hideContent(activeContent);
        if (eventID === '1') {
            var index = activeContentID + 1;
            contents[index].classList.add(CLASS_ACTIVE_CONTENT);
            toggles[index].classList.add(CLASS_ACTIVE_INDECATOR);
            activeToggle = toggles[index];
            activeContent = contents[index];
            changeArrow(index);
            return;
        }

        if (eventID === '0') {
            var _index = activeContentID - 1;
            contents[_index].classList.add(CLASS_ACTIVE_CONTENT);
            toggles[_index].classList.add(CLASS_ACTIVE_INDECATOR);
            activeToggle = toggles[_index];
            activeContent = contents[_index];
            changeArrow(_index);
            return;
        }
    }

    function hideContent(activeContent) {
        if (activeToggle) {
            activeToggle.classList.remove(CLASS_ACTIVE_INDECATOR);
            activeContent.classList.remove(CLASS_ACTIVE_CONTENT);
        }
    }

    function changeArrow(index) {
        if (index === 2) {
            toggleArrows[1].classList.remove('slider__arrow_active');
            toggleArrows[0].classList.add('slider__arrow_active');
        }

        if (index === 0) {
            toggleArrows[0].classList.remove('slider__arrow_active');
            toggleArrows[1].classList.add('slider__arrow_active');
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

var _tabMenu = __webpack_require__(146);

function balanceMenu(balanceTabs, balanceContents) {
    var props = {
        TAB: '.balance__tab-content',
        CONTENT: '.balance__diagram',
        CLASS_ACTIVE_TAB: '.balance__tab-content_active',
        CLASS_ACTIVE_CONTENT: '.balance__diagram_opened',
        ACTIVE_TAB: 'balance__tab-content_active',
        ACTIVE_CONTENT: 'balance__diagram_opened'
    };

    (0, _tabMenu.tabMenu)(balanceTabs, balanceContents, props);
}

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lessonMenu = lessonMenu;

var _tabMenu = __webpack_require__(146);

function lessonMenu(lessonTabs, lessonContents) {
    var props = {
        TAB: '.nav__tab',
        CONTENT: '.main__tab-content',
        CLASS_ACTIVE_TAB: '.nav__tab_active',
        CLASS_ACTIVE_CONTENT: '.main__tab-content_opened',
        ACTIVE_TAB: 'nav__tab_active',
        ACTIVE_CONTENT: 'main__tab-content_opened'
    };

    (0, _tabMenu.tabMenu)(lessonTabs, lessonContents, props);
}

/***/ })

/******/ });