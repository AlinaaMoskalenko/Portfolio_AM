import './lesson9.scss';
import { inherits } from 'util';

const commentForm = document.querySelector('#commentForm');
const cancel = document.querySelector('#cancel');
const userName = document.querySelector('#username');
const userText = document.querySelector('#userText');
const text = document.querySelector('#text');

function send(e) {
    e.preventDefault();

    if (!userName.value) { //userName.value === '' (!!userName.value = true) - двойное отрицание
        userName.style.background = 'red';
        text.innerHTML = 'Error!';
    }

    if (!userText.value) {
        userText.style.background = 'red';
        text.innerHTML = 'Error!';
    }

    if (!!userName.value && !!userText.value) {
        text.innerHTML = text.innerHTML + `<div><h1>${userName.value}</h1> ${userText.value}</div>`;
        userName.value = '';
        userText.value = '';
    }

}

function reset(e) {
    userName.value = '';
    userText.value = '';
    userName.style.background = 'inherit';
    userText.style.background = 'inherit';
    text.innerHTML = '';
    console.log('Canceled');
}

commentForm.onsubmit = send;
cancel.onclick = reset;
