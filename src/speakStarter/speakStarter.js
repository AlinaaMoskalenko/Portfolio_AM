import './speakStarter.scss';
import { tabMenu } from "./scripts/tabMenu";
import { notificationMenu } from './scripts/notificationMenu';
import { slider } from './scripts/slider';
import { balanceMenu } from './scripts/balanceMenu';

const tabBtn = document.querySelector('.nav');
const tabContents = document.querySelector('.main');
tabMenu(tabBtn, tabContents);

const notificationBtn = document.querySelector('.header__notification');
notificationMenu(notificationBtn);

const sliderContent = document.querySelector('.next-lesson__conteiner');
const sliderBtn = document.querySelector('.next-lesson__slider');
slider(sliderContent, sliderBtn);

const balanceTabs = document.querySelector('.balance__tab');
const balanceContents = document.querySelector('.balance__conteiner');
balanceMenu(balanceTabs, balanceContents);

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

const sidebarElement = document.querySelector('.wrapper-sidebar');
window.addEventListener("orientationchange", function () {
    if (sidebarElement.classList.contains('wrapper-sidebar_opened'))
        sidebarElement.style.transition = 'none';

});