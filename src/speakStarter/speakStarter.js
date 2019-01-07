import './speakStarter.scss';
import { tabMenu } from "./scripts/tabMenu";


const tabBtn = document.querySelector('.nav');
const tabContents = document.querySelector('.main');

tabMenu(tabBtn, tabContents);


//sidebar open
const sidebarToggle = document.querySelector('.sidebar__toggle');
const sidebar = document.querySelector('.wrapper-sidebar');
const content = document.querySelector('.wrapper__content');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('wrapper-sidebar_opened');
    content.classList.toggle('wrapper__content_hidden');
});

//next lesson open options
const lessonMenu = document.querySelectorAll('.scheduled-lesson__options');
const lessonAction = document.querySelectorAll('.next-lesson__action');

for (let i = 0; i < lessonMenu.length; i++) {
    lessonMenu[i].addEventListener('click', (event) => {
        event.target.classList.toggle('scheduled-lesson__options_opened');
        lessonAction[i].classList.toggle('next-lesson__action_opened');
    });
}