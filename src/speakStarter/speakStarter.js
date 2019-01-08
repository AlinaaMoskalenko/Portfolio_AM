import './speakStarter.scss';
import { notificationMenu } from './scripts/notificationMenu';
import { sliderMenu } from './scripts/sliderMenu';
import { balanceMenu } from './scripts/balanceMenu';
import { lessonMenu } from './scripts/lessonMenu';

const tabBtn = document.querySelector('.nav');
const tabContents = document.querySelector('.main');
lessonMenu(tabBtn, tabContents);

const notificationBtn = document.querySelector('.header__notification');
notificationMenu(notificationBtn);

const sliderContent = document.querySelector('.next-lesson__conteiner');
const sliderBtn = document.querySelector('.next-lesson__slider');
sliderMenu(sliderContent, sliderBtn);

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
const lessonOption = document.querySelectorAll('.scheduled-lesson__options');
const lessonAction = document.querySelectorAll('.next-lesson__action');

for (let i = 0; i < lessonOption.length; i++) {
    lessonOption[i].addEventListener('click', (event) => {
        event.target.classList.toggle('scheduled-lesson__options_opened');
        lessonAction[i].classList.toggle('next-lesson__action_opened');
    });
}

const sidebarElement = document.querySelector('.wrapper-sidebar');
window.addEventListener("orientationchange", function () {
    if (sidebarElement.classList.contains('wrapper-sidebar_opened'))
        sidebarElement.style.transition = 'none';

});