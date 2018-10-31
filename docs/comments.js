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
/******/ 	return __webpack_require__(__webpack_require__.s = 375);
/******/ })
/************************************************************************/
/******/ ({

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(376);


/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(377);

var _CommentForm = __webpack_require__(378);

var commentForm = new _CommentForm.CommentForm(document.querySelector('#formForComments'));

/***/ }),

/***/ 377:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FORM_CLASS_NAME = 'form-for-comments';
var DATE_CLASS_NAME = 'comment-date';
var USER_BLOCK_CLASS_NAME = 'user-block';
var USER_NAME_CLASS = 'user-block__fullname';
var USER_COMMENT_CLASS = 'user-block__comment';
var OPTIONS_CLASS = 'options';
var OPTIONS_BUTTON_CLASS = 'options__button';

var CommentForm = exports.CommentForm = function () {
    function CommentForm(rootElement) {
        _classCallCheck(this, CommentForm);

        this.rootElement = rootElement;
        this.render();
        this.getDate();
    }

    _createClass(CommentForm, [{
        key: 'render',
        value: function render() {
            this.dateOfComment = document.createElement('div');
            this.userBlock = document.createElement('div');
            this.userName = document.createElement('input');
            this.userComment = document.createElement('textarea');
            this.options = document.createElement('div');
            this.sendButton = document.createElement('button');
            this.cancelButton = document.createElement('button');

            this.userName.type = 'text';
            this.userComment.rows = 7;
            this.userComment.cols = 30;

            this.dateOfComment.textContent = '31.10.2018';
            this.userName.placeholder = "Enter your full name (eg. John Smith)";
            this.userComment.placeholder = "Write your comment";
            this.sendButton.textContent = "Send comment";
            this.cancelButton.textContent = "Cancel";

            this.rootElement.classList.add(FORM_CLASS_NAME);
            this.dateOfComment.classList.add(DATE_CLASS_NAME);
            this.userBlock.classList.add(USER_BLOCK_CLASS_NAME);
            this.userName.classList.add(USER_NAME_CLASS);
            this.userComment.classList.add(USER_COMMENT_CLASS);
            this.options.classList.add(OPTIONS_CLASS);
            this.sendButton.classList.add(OPTIONS_BUTTON_CLASS);
            this.cancelButton.classList.add(OPTIONS_BUTTON_CLASS);

            this.rootElement.appendChild(this.dateOfComment);
            this.rootElement.appendChild(this.userBlock);
            this.userBlock.appendChild(this.userName);
            this.userBlock.appendChild(this.userComment);
            this.rootElement.appendChild(this.options);
            this.options.appendChild(this.sendButton);
            this.options.appendChild(this.cancelButton);

            //для send возможно нужно установить submit
            this.sendButton.addEventListener('click', this.sendComment.bind(this));
            this.cancelButton.addEventListener('click', this.cancel.bind(this));
        }
    }, {
        key: 'getDate',
        value: function getDate() {
            this.currentDate = new Date();
            // console.log(this.currentDate.toJSON()); использовать такой формат для передачи данных
            this.dateOfComment.textContent = this.currentDate.getFullYear() + "-" + this.currentDate.getMonth() + "-" + this.currentDate.getDate();
        }
    }, {
        key: 'sendComment',
        value: function sendComment(event) {
            event.preventDefault();
        }
    }, {
        key: 'cancel',
        value: function cancel(event) {
            event.preventDefault();
        }
    }]);

    return CommentForm;
}();

/***/ })

/******/ });