import { HTTPService } from './http-service';

const USER_COMMENT_BLOCK = 'existing-comments__comment';
const COMMENT_DESCRIPTION_CLASS_NAME = 'comment__description';
const COMMENT_TEXT_CLASS_NAME = 'comment__text';
const AUTHOR_CLASS_NAME = 'comment__author';
const COMMENT_INFO_CLASS_NAME = 'comment__info';
const COMMENT_TIME_CLASS_NAME = 'time';
const COMMENT_DATE_CLASS_NAME = 'date';
const DELETE_COMMENT_CLASS_NAME = 'comment__delete';
const TRASH_CLASS_NAME = ['fas', 'fa-trash'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const COMMENT_ID_PREFIX = 'commentID';

const URL = 'https://evening-dawn-11092.herokuapp.com/comments';

export class UserComment {
    constructor(rootElement) {
        this.rootElement = rootElement;
        this.httpService = new HTTPService();
    }

    getComments() {
        this.httpService.get(URL, (response) => this.renderComment(response));
    }

    deleteComment(commentID) {
        this.httpService.delete(`${URL}/${commentID}`, () => {
            const elementForRemove = this.rootElement.querySelector(`#${COMMENT_ID_PREFIX + commentID}`);
            this.rootElement.removeChild(elementForRemove);
        });
    }

    renderOneComment(comment) {
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

        const currentDate = new Date(comment.date);

        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        let seconds = currentDate.getSeconds();

        if (hours < 10)
            hours = "0" + hours;
        if (minutes < 10)
            minutes = "0" + minutes;
        if (seconds < 10)
            seconds = "0" + seconds;

        this.commentTime.textContent = hours + ":" + minutes + ":" + seconds;
        this.commentDate.textContent = MONTHS[currentDate.getMonth()] + " " + currentDate.getDate() + ", " + currentDate.getFullYear();

        this.commentText.textContent = comment.text;

        this.previousCommentID = this.commentBlock.id;
    }

    renderComment(comments) {
        comments.forEach((comment) => this.renderOneComment(comment));
    }

    render() {
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

        for (let i = 0; i < TRASH_CLASS_NAME.length; i++) {
            this.trash.classList.add(TRASH_CLASS_NAME[i]);
        }

        this.trash.addEventListener('click', (event) => {
            event.stopPropagation();
            const id = event.target.closest('div[id]').getAttribute('id').replace(COMMENT_ID_PREFIX, '');
            this.deleteComment(id);
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
}