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
/******/ 	return __webpack_require__(__webpack_require__.s = 362);
/******/ })
/************************************************************************/
/******/ ({

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(363);


/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(364);

var commentForm = document.querySelector('#commentForm');
var cancel = document.querySelector('#cancel');
var userName = document.querySelector('#username');
var userText = document.querySelector('#userText');
var text = document.querySelector('#text');

function createComment() {
    return '<div class="comment">\n                <p>' + userText.value + '</p>\n                <h2>' + userName.value + '</h2> \n            </div>';
}

function resetFileds() {
    userName.value = '';
    userText.value = '';
}

function send(e) {
    e.preventDefault();
    var texxtComntent = text.innerHTML;
    if (!userName.value) {
        //userName.value === '' or !!userName.value - двойное отрицание
        userName.style.background = 'red';
        text.innerHTML = 'Error!';
    }

    console.log(text.innerHTML);

    if (!userText.value) {
        userText.style.background = 'red';
        text.innerHTML = 'Error!';
    }

    if (!!userName.value && !!userText.value) {
        text.innerHTML = text.innerHTML + createComment();
        resetFileds();
    }
}

function reset(e) {
    resetFileds();
    userName.style.background = 'inherit';
    userText.style.background = 'inherit';
    text.innerHTML = '';
}

commentForm.onsubmit = send;
cancel.onclick = reset;

/***/ }),

/***/ 364:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });