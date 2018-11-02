import { HTTPService } from './http-service';
import { UserComment } from './userComment';

const FORM_CLASS_NAME = 'form-for-comments';
const DATE_CLASS_NAME = 'comment-date';
const USER_BLOCK_CLASS_NAME = 'user-block';
const USER_NAME_CLASS = 'user-block__fullname';
const USER_COMMENT_CLASS = 'user-block__comment';
const OPTIONS_CLASS = 'options';
const OPTIONS_BUTTON_CLASS = 'options__button';
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const URL = 'https://evening-dawn-11092.herokuapp.com/comments';

export class CommentForm {
    constructor(rootElement) {
        this.rootElement = rootElement;
        this.httpService = new HTTPService();
        this.commentList = new UserComment(document.querySelector('#existComments'));
        this.render();
        this.renderDate();
    }

    render() {
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

        this.userName.addEventListener('focus', () => {
            this.userName.style.border = 'none';
        });

        this.userComment.addEventListener('focus', () => {
            this.userComment.style.border = 'none';
        });

        this.rootElement.addEventListener('submit', (event) => this.onSubmit(event));
        this.cancelButton.addEventListener('click', this.cancel.bind(this));
    }

    renderDate() {
        this.currentDate = new Date();
        this.dateOfComment.textContent = MONTHS[this.currentDate.getMonth()] + " " + this.currentDate.getDate() + ", " + this.currentDate.getFullYear();
    }

    onSubmit(event) {
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
            const author = this.userName.value;
            const text = this.userComment.value;

            this.userName.value = "";
            this.userComment.value = "";

            this.httpService.post(URL, { author, text }, (comment) => {
                this.commentList.renderOneComment(comment);
            });
        }
    }

    cancel(event) {
        event.preventDefault();

        this.userName.value = "";
        this.userComment.value = "";

        this.userName.style.border = 'none';
        this.userComment.style.border = 'none';
    }
}