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
/******/ 	return __webpack_require__(__webpack_require__.s = 377);
/******/ })
/************************************************************************/
/******/ ({

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserComment = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _httpService = __webpack_require__(90);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var USER_COMMENT_BLOCK = 'existing-comments__comment';
var COMMENT_DESCRIPTION_CLASS_NAME = 'comment__description';
var COMMENT_TEXT_CLASS_NAME = 'comment__text';
var AUTHOR_CLASS_NAME = 'comment__author';
var COMMENT_INFO_CLASS_NAME = 'comment__info';
var COMMENT_TIME_CLASS_NAME = 'time';
var COMMENT_DATE_CLASS_NAME = 'date';
var DELETE_COMMENT_CLASS_NAME = 'comment__delete';
var TRASH_CLASS_NAME = ['fas', 'fa-trash'];
var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var COMMENT_ID_PREFIX = 'commentID';

var URL = 'https://evening-dawn-11092.herokuapp.com/comments';

var UserComment = exports.UserComment = function () {
    function UserComment(rootElement) {
        _classCallCheck(this, UserComment);

        this.rootElement = rootElement;
        this.httpService = new _httpService.HTTPService();
    }

    _createClass(UserComment, [{
        key: 'getComments',
        value: function getComments() {
            var _this = this;

            this.httpService.get(URL, function (response) {
                return _this.renderComment(response);
            });
        }
    }, {
        key: 'deleteComment',
        value: function deleteComment(commentID) {
            var _this2 = this;

            this.httpService.delete(URL + '/' + commentID, function () {
                var elementForRemove = _this2.rootElement.querySelector('#' + (COMMENT_ID_PREFIX + commentID));
                _this2.rootElement.removeChild(elementForRemove);
            });
        }
    }, {
        key: 'renderOneComment',
        value: function renderOneComment(comment) {
            this.commentBlock = document.createElement('div');
            this.commentBlock.id = COMMENT_ID_PREFIX + comment.id;
            this.commentBlock.classList.add(USER_COMMENT_BLOCK);

            if (this.previousCommentID === undefined) {
                if (this.rootElement.hasChildNodes()) {
                    this.rootElement.insertBefore(this.commentBlock, document.getElementById(this.rootElement.firstChild.id));
                } else {
                    this.rootElement.appendChild(this.commentBlock);
                }
            } else {
                this.rootElement.insertBefore(this.commentBlock, document.getElementById(this.previousCommentID));
            }

            this.render();

            this.author.textContent = comment.author;

            var currentDate = new Date(comment.date);

            var hours = currentDate.getHours();
            var minutes = currentDate.getMinutes();
            var seconds = currentDate.getSeconds();

            if (hours < 10) hours = "0" + hours;
            if (minutes < 10) minutes = "0" + minutes;
            if (seconds < 10) seconds = "0" + seconds;

            this.commentTime.textContent = hours + ":" + minutes + ":" + seconds;
            this.commentDate.textContent = MONTHS[currentDate.getMonth()] + " " + currentDate.getDate() + ", " + currentDate.getFullYear();

            this.commentText.textContent = comment.text;

            this.previousCommentID = this.commentBlock.id;
        }
    }, {
        key: 'renderComment',
        value: function renderComment(comments) {
            var _this3 = this;

            comments.forEach(function (comment) {
                return _this3.renderOneComment(comment);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            this.commentDescription = document.createElement('div');
            this.commentText = document.createElement('div');
            this.author = document.createElement('h4');
            this.commentInfo = document.createElement('div');
            this.commentTime = document.createElement('div');
            this.commentDate = document.createElement('div');
            this.delete = document.createElement('div');
            this.trash = document.createElement('i');

            this.commentDescription.classList.add(COMMENT_DESCRIPTION_CLASS_NAME);
            this.commentText.classList.add(COMMENT_TEXT_CLASS_NAME);
            this.author.classList.add(AUTHOR_CLASS_NAME);
            this.commentInfo.classList.add(COMMENT_INFO_CLASS_NAME);
            this.commentTime.classList.add(COMMENT_TIME_CLASS_NAME);
            this.commentDate.classList.add(COMMENT_DATE_CLASS_NAME);
            this.delete.classList.add(DELETE_COMMENT_CLASS_NAME);

            for (var i = 0; i < TRASH_CLASS_NAME.length; i++) {
                this.trash.classList.add(TRASH_CLASS_NAME[i]);
            }

            this.trash.addEventListener('click', function (event) {
                event.stopPropagation();
                var id = event.target.closest('div[id]').getAttribute('id').replace(COMMENT_ID_PREFIX, '');
                _this4.deleteComment(id);
            });

            this.commentBlock.appendChild(this.commentDescription);
            this.commentBlock.appendChild(this.commentText);

            this.commentDescription.appendChild(this.author);
            this.commentDescription.appendChild(this.commentInfo);

            this.commentInfo.appendChild(this.commentTime);
            this.commentInfo.appendChild(this.commentDate);
            this.commentInfo.appendChild(this.delete);

            this.delete.appendChild(this.trash);
        }
    }]);

    return UserComment;
}();

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(378);


/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(379);

var _commentForm = __webpack_require__(380);

var _userComment = __webpack_require__(126);

var _httpService = __webpack_require__(90);

new _commentForm.CommentForm(document.querySelector('#formForComments'));
var allComments = new _userComment.UserComment(document.querySelector('#existComments'));
allComments.getComments();

/***/ }),

/***/ 379:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CommentForm = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _httpService = __webpack_require__(90);

var _userComment = __webpack_require__(126);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FORM_CLASS_NAME = 'form-for-comments';
var DATE_CLASS_NAME = 'comment-date';
var USER_BLOCK_CLASS_NAME = 'user-block';
var USER_NAME_CLASS = 'user-block__fullname';
var USER_COMMENT_CLASS = 'user-block__comment';
var OPTIONS_CLASS = 'options';
var OPTIONS_BUTTON_CLASS = 'options__button';
var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var URL = 'https://evening-dawn-11092.herokuapp.com/comments';

var CommentForm = exports.CommentForm = function () {
    function CommentForm(rootElement) {
        _classCallCheck(this, CommentForm);

        this.rootElement = rootElement;
        this.httpService = new _httpService.HTTPService();
        this.commentList = new _userComment.UserComment(document.querySelector('#existComments'));
        this.render();
        this.renderDate();
    }

    _createClass(CommentForm, [{
        key: 'render',
        value: function render() {
            var _this = this;

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
            this.rootElement.appendChild(this.options);

            this.userBlock.appendChild(this.userName);
            this.userBlock.appendChild(this.userComment);

            this.options.appendChild(this.sendButton);
            this.options.appendChild(this.cancelButton);

            this.userName.addEventListener('focus', function () {
                _this.userName.style.border = 'none';
            });

            this.userComment.addEventListener('focus', function () {
                _this.userComment.style.border = 'none';
            });

            this.rootElement.addEventListener('submit', function (event) {
                return _this.onSubmit(event);
            });
            this.cancelButton.addEventListener('click', this.cancel.bind(this));
        }
    }, {
        key: 'renderDate',
        value: function renderDate() {
            this.currentDate = new Date();
            this.dateOfComment.textContent = MONTHS[this.currentDate.getMonth()] + " " + this.currentDate.getDate() + ", " + this.currentDate.getFullYear();
        }
    }, {
        key: 'onSubmit',
        value: function onSubmit(event) {
            var _this2 = this;

            event.preventDefault();

            if (this.userName.value === '' && this.userComment.value !== '') {
                this.userName.style.border = '2px solid red';
            }

            if (this.userName.value !== '' && this.userComment.value === '') {
                this.userComment.style.border = '2px solid red';
            }

            if (this.userName.value === '' && this.userComment.value === '') {
                this.userName.style.border = 'none';
                this.userComment.style.border = 'none';
            }

            if (this.userName.value !== '' && this.userComment.value !== '') {
                var author = this.userName.value;
                var text = this.userComment.value;

                this.userName.value = "";
                this.userComment.value = "";

                this.httpService.post(URL, { author: author, text: text }, function (comment) {
                    _this2.commentList.renderOneComment(comment);
                });
            }
        }
    }, {
        key: 'cancel',
        value: function cancel(event) {
            event.preventDefault();

            this.userName.value = "";
            this.userComment.value = "";

            this.userName.style.border = 'none';
            this.userComment.style.border = 'none';
        }
    }]);

    return CommentForm;
}();

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HTTPService = exports.HTTPService = function () {
    function HTTPService() {
        _classCallCheck(this, HTTPService);
    }

    _createClass(HTTPService, [{
        key: 'get',
        value: function get(url, successCallBack, errorCallBack) {
            //url - адрес сервера, successCallBack - что нужно выполнить при удачном выполнении запроса, errorCallBack - при неудачном 
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url); //указывает какую команду хотим выполнить и адресс сервера
            xhr.send(); //данные улетели

            //проверка состояния, 4 указывает на возврат от сервера данных полных, клиент получил последнюю порцию данных(есть состояния от 1-4), 
            // а 200 на успешное выполнение запроса и получения данных от сервера (есть ошибки от 100-500)
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        var parseData = JSON.parse(xhr.response); //полученый массив строк переводим в массив объектов
                        successCallBack(parseData);
                    } else {
                        errorCallBack(xhr);
                    }
                }
            };
        }
    }, {
        key: 'post',
        value: function post(url, data, successCallBack, errorCallBack) {
            //data - информация которую нужно отправить
            var xhr = new XMLHttpRequest();
            xhr.open('POST', url);

            xhr.setRequestHeader('content-type', 'application/json'); //даем понять серверу, что мы ему отправим json строку
            xhr.send(typeof data !== 'string' ? JSON.stringify(data) : data); //данные превращаем в строку делая сначало проверку на то, являются ли данные уже строкой

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        var parseData = JSON.parse(xhr.response); //полученый массив строк переводим в массив объектов
                        successCallBack(parseData);
                    } else {
                        errorCallBack(xhr);
                    }
                }
            };
        }
    }, {
        key: 'delete',
        value: function _delete(url, successCallBack, errorCallBack) {
            var xhr = new XMLHttpRequest();
            xhr.open('DELETE', url);

            xhr.send();

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        var parseData = JSON.parse(xhr.response);
                        successCallBack(parseData);
                    } else {
                        errorCallBack(xhr);
                    }
                }
            };
        }
    }]);

    return HTTPService;
}();

/***/ })

/******/ });