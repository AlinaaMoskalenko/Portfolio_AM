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
/******/ 	return __webpack_require__(__webpack_require__.s = 351);
/******/ })
/************************************************************************/
/******/ ({

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(352);


/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(353);

var _footerMenu = __webpack_require__(354);

var _footerMenu2 = _interopRequireDefault(_footerMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _footerMenu2.default(document.querySelectorAll('.footer-content__item-title'));

var burger = document.querySelector('.burger');
var nav = document.querySelector('.global-nav');

burger.addEventListener('click', function () {
    nav.classList.toggle('global-nav_opened');
});

/***/ }),

/***/ 353:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FooterMenu = function () {
    function FooterMenu(rootElement) {
        _classCallCheck(this, FooterMenu);

        this.rootElement = rootElement;
        this.render();
    }

    _createClass(FooterMenu, [{
        key: 'toggleMenu',
        value: function toggleMenu(event) {
            this.rootElement.forEach(function (itemTitle) {
                if (itemTitle.parentNode.getAttribute('data-title') === event.target.getAttribute('data-toggle')) itemTitle.parentNode.classList.toggle('ftr-item_opened');
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;

            var i = 0;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.rootElement[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var itemTitle = _step.value;

                    this.togglePlus = document.createElement('div');
                    this.togglePlus.classList.add('burger-ftr');
                    this.togglePlus.setAttribute('data-toggle', i);
                    this.togglePlus.textContent = '+';
                    this.togglePlus.addEventListener('click', function (event) {
                        return _this.toggleMenu(event);
                    });

                    itemTitle.parentNode.setAttribute('data-title', i);
                    itemTitle.appendChild(this.togglePlus);
                    i++;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }]);

    return FooterMenu;
}();

exports.default = FooterMenu;

/***/ })

/******/ });