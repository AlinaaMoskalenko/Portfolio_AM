import './lesson9.scss';

const commentForm = document.querySelector('#commentForm');
const cancel = document.querySelector('#cancel');
const userName = document.querySelector('#username');
const userText = document.querySelector('#userText');
const text = document.querySelector('#text');

function createComment() {
    return `<div class="comment">
                <p>${userText.value}</p>
                <h2>${userName.value}</h2> 
            </div>`;
}

function resetFileds() {
    userName.value = '';
    userText.value = '';
}

function send(e) {
    e.preventDefault();
    const texxtComntent = text.innerHTML;
    if (!userName.value) { //userName.value === '' or !!userName.value - двойное отрицание
        userName.style.background = 'red';
        text.innerHTML = 'Error!';
    }

    console.log(text.innerHTML)

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
