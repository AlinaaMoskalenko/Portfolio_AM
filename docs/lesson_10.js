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
/******/ 	return __webpack_require__(__webpack_require__.s = 367);
/******/ })
/************************************************************************/
/******/ ({

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(368);


/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _calc = __webpack_require__(369);

var _trafficLighter = __webpack_require__(374);

__webpack_require__(375);

/*const initBtn = document.querySelector('#calcBtn');
initBtn.onclick = calc;*/
var lightersHtmlElements = document.querySelectorAll('.traffic-lighter');

for (var i = 0; i < lightersHtmlElements.length; i++) {
  (0, _trafficLighter.trafficLighter)(lightersHtmlElements[i]);
}

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calc = calc;

var _add = __webpack_require__(370);

var _substitude = __webpack_require__(371);

var _divide = __webpack_require__(372);

var _multiply = __webpack_require__(373);

function calc() {
  var operandA = Number(prompt('Operand A', 0));
  var operandB = Number(prompt('Operand B', 0));
  var operator = prompt('Operator', '+');
  var result = 0;

  switch (operator) {
    case '+':
      result = (0, _add.add)(operandA, operandB);
      break;
    case '-':
      result = (0, _substitude.subtitude)(operandA, operandB);
      break;
    case '/':
      result = (0, _divide.divide)(operandA, operandB);
      break;
    case '*':
      result = (0, _multiply.multiply)(operandA, operandB);
      break;
    default:
      alert('Please enter valid operator. Supported operators are +, -, *, /');
  }

  print(result);
}

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var add = exports.add = function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw Error('Provided not a number');
  }
  return a + b;
};

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var subtitude = exports.subtitude = function subtitude(a, b) {
  return a - b;
};

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var divide = exports.divide = function divide(a, b) {
  return a / b;
};

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var multiply = exports.multiply = function multiply(a, b) {
  return a * b;
};

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trafficLighter = trafficLighter;
function trafficLighter(targetElement) {
  var ACTIVE_CLASS_NAME = 'traffic-lighter__lamp_active';
  var lights = targetElement.querySelectorAll('.traffic-lighter__lamp');
  var activeElement = void 0;

  function tornOnLight(element) {
    if (activeElement !== undefined) {
      activeElement.classList.remove(ACTIVE_CLASS_NAME);
    }
    activeElement = element;
    element.classList.toggle(ACTIVE_CLASS_NAME);
  }

  var _loop = function _loop(i) {
    lights[i].onclick = function () {
      tornOnLight(lights[i]);
    };
  };

  for (var i = 0; i < lights.length; i += 1) {
    _loop(i);
  }
}

/***/ }),

/***/ 375:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });