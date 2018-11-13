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
/******/ 	return __webpack_require__(__webpack_require__.s = 383);
/******/ })
/************************************************************************/
/******/ ({

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(384);


/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(385);

var _trafficLighterDynamic = __webpack_require__(386);

var _trafficLighterDynamicStyles = __webpack_require__(387);

(0, _trafficLighterDynamic.trafficLighterDynamic)('#trafficLighter');
(0, _trafficLighterDynamic.trafficLighterDynamic)('#trafficLighter1', ['red', 'yellow', 'green', 'aqua']);
(0, _trafficLighterDynamic.trafficLighterDynamic)('#trafficLighter2', ['pink', 'black', 'blue']);

(0, _trafficLighterDynamicStyles.trafficLighterDynamicStyles)('#trafficLighter3');
(0, _trafficLighterDynamicStyles.trafficLighterDynamicStyles)('#trafficLighter4', ['orange', 'green', 'yellow', 'aqua']);
(0, _trafficLighterDynamicStyles.trafficLighterDynamicStyles)('#trafficLighter5', ['black', 'magenta', 'blue']);

/***/ }),

/***/ 385:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.trafficLighterDynamic = trafficLighterDynamic;
var TRAFFIC_LIGHTER = 'traffic-lighter';
var TRAFFIC_LIGHTER_LAMP = 'traffic-lighter__lamp';
var TRAFFIC_LIGHTER_LAMP_COLOR = ['red', 'yellow', 'green'];
var ACTIVE_TRAFFIC_LIGHTER = 'traffic-lighter__lamp_active';

function trafficLighterDynamic(selector, options) {
    if (!options) {
        options = TRAFFIC_LIGHTER_LAMP_COLOR;
    }
    var trafficLighter = document.querySelector(selector);
    var activeLight = void 0;
    var btn = void 0;

    function render() {
        trafficLighter.classList.add(TRAFFIC_LIGHTER);

        for (var i = 0; i < options.length; i++) {
            btn = document.createElement('button');
            btn.classList.add(TRAFFIC_LIGHTER_LAMP);
            btn.classList.add(TRAFFIC_LIGHTER_LAMP + '_' + options[i]);
            trafficLighter.appendChild(btn);
        }
    }

    function turnOnLight() {

        trafficLighter.addEventListener('click', function (event) {
            if (event.target.classList.contains(TRAFFIC_LIGHTER_LAMP)) {
                turnOffLight();
                activeLight = event.target;
                event.target.classList.toggle(ACTIVE_TRAFFIC_LIGHTER);
            }
        });
    }

    function turnOffLight() {
        if (activeLight) {
            activeLight.classList.remove(ACTIVE_TRAFFIC_LIGHTER);
        }
    }

    render();
    turnOnLight();
}

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.trafficLighterDynamicStyles = trafficLighterDynamicStyles;
var TRAFFIC_LIGHTER = 'traffic-lighter';
var TRAFFIC_LIGHTER_LAMP = 'traffic-lighter__lamp';
var TRAFFIC_LIGHTER_LAMP_COLOR = ['red', 'yellow', 'green'];

function trafficLighterDynamicStyles(selector, options) {
    if (!options) {
        options = TRAFFIC_LIGHTER_LAMP_COLOR;
    }

    var trafficLighter = document.querySelector(selector);
    var activeLight = void 0;
    var btn = void 0;

    function render() {
        trafficLighter.classList.add(TRAFFIC_LIGHTER);

        for (var i = 0; i < options.length; i++) {
            btn = document.createElement('button');
            btn.classList.add(TRAFFIC_LIGHTER_LAMP);
            btn.setAttribute('data-color', options[i]);
            trafficLighter.appendChild(btn);
        }
    }

    function turnOnLight() {

        trafficLighter.addEventListener('click', function (event) {
            if (event.target.classList.contains(TRAFFIC_LIGHTER_LAMP)) {
                turnOffLight();
                activeLight = event.target;
                event.target.style.backgroundColor = event.target.getAttribute('data-color');
            }
        });
    }

    function turnOffLight() {
        if (activeLight) {
            activeLight.style.backgroundColor = 'inherit';
        }
    }

    render();
    turnOnLight();
}

/***/ })

/******/ });