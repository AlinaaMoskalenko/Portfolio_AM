const FORM_CLASS_NAME = 'form-for-comments';
const DATE_CLASS_NAME = 'comment-date';
const USER_BLOCK_CLASS_NAME = 'user-block';
const USER_NAME_CLASS = 'user-block__fullname';
const USER_COMMENT_CLASS = 'user-block__comment';
const OPTIONS_CLASS = 'options';
const OPTIONS_BUTTON_CLASS = 'options__button';

export class CommentForm {
    constructor(rootElement) {
        this.rootElement = rootElement;
        this.render();
        this.getDate();
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

    getDate() {
        this.currentDate = new Date();
        // console.log(this.currentDate.toJSON()); использовать такой формат для передачи данных
        this.dateOfComment.textContent = this.currentDate.getFullYear() + "-" + this.currentDate.getMonth() + "-" + this.currentDate.getDate();
    }

    sendComment(event) {
        event.preventDefault();
    }

    cancel(event) {
        event.preventDefault();
    }
}