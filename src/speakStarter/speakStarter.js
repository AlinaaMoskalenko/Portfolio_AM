import './speakStarter.scss';

const lessonMenu = document.querySelectorAll('.scheduled-lesson__options');
const lessonAction = document.querySelectorAll('.next-lesson__action');

for (let i =0; i<lessonMenu.length;i++) {
    lessonMenu[i].addEventListener('click', (event) => {
        event.target.classList.toggle('scheduled-lesson__options_opened');
        lessonAction[i].classList.toggle('next-lesson__action_opened');
    });
}