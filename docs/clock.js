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
/******/ 	return __webpack_require__(__webpack_require__.s = 392);
/******/ })
/************************************************************************/
/******/ ({

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(393);


/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(394);

var _DynamicClock = __webpack_require__(395);

var clock = new _DynamicClock.DynamicClock(document.querySelector("#clockConteiner"));

/***/ }),

/***/ 394:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CONTEINER_CLASS_NAME = 'clock-conteiner';
var CLOCK_CLASS_NAME = 'clock-conteiner__clock';
var DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var mode = "simpleMode";

var DynamicClock = exports.DynamicClock = function () {
    function DynamicClock(rootElement) {
        _classCallCheck(this, DynamicClock);

        this.rootElement = rootElement;
        this.render();
        this.startUpdate();
    }

    _createClass(DynamicClock, [{
        key: 'render',
        value: function render() {

            this.clockFace = document.createElement('button');

            this.clockFace.classList.add(CLOCK_CLASS_NAME);
            this.rootElement.classList.add(CONTEINER_CLASS_NAME);

            // this.clockFace.addEventListener('click', this.switchTime.bind(this)); //или можно записать () => this.switchTime()
            this.clockFace.addEventListener('click', this.switchMode.bind(this));
            this.clockFace.addEventListener('contextmenu', this.switchDateMode.bind(this));

            this.rootElement.appendChild(this.clockFace);
        }
    }, {
        key: 'changeValue',
        value: function changeValue(value) {
            return value = '0' + value;
        }
    }, {
        key: 'updateTime',
        value: function updateTime() {
            this.currentDate = new Date();

            var hours = this.currentDate.getHours();
            var minutes = this.currentDate.getMinutes();
            var seconds = this.currentDate.getSeconds();
            var date = this.currentDate.getDate();

            if (hours < 10) hours = this.changeValue(hours);
            if (minutes < 10) minutes = this.changeValue(minutes);
            if (seconds < 10) seconds = this.changeValue(seconds);
            if (date < 10) date = this.changeValue(date);

            if (mode === "simpleMode") {
                this.clockFace.textContent = hours + " : " + minutes;
            } else if (mode === "fullMode") {
                this.clockFace.textContent = hours + " : " + minutes + " : " + seconds;
            } else {
                this.clockFace.innerHTML = DAYS[this.currentDate.getDay()] + " " + date + ", " + '<br>' + MONTHS[this.currentDate.getMonth()] + " " + this.currentDate.getFullYear();
            }
        }
    }, {
        key: 'startUpdate',
        value: function startUpdate() {
            var _this = this;

            this.updateTime();

            this.intervalId = setInterval(function () {
                _this.updateTime();
            }, 1000);
        }

        //функция для остановки часовж

    }, {
        key: 'switchTime',
        value: function switchTime() {
            if (this.intervalId != 0) {
                clearInterval(this.intervalId);
                this.intervalId = 0;
            } else {
                this.updateTime();
            }
        }
    }, {
        key: 'switchMode',
        value: function switchMode() {
            if (mode === "simpleMode") {
                mode = "fullMode";
            } else {
                mode = "simpleMode";
            }

            this.updateTime();
        }
    }, {
        key: 'switchDateMode',
        value: function switchDateMode(event) {
            event.preventDefault();

            if (mode !== "dateMode") {
                mode = "dateMode";
            } else {
                mode = "simpleMode";
            }

            this.updateTime();
        }
    }]);

    return DynamicClock;
}();

/***/ })

/******/ });