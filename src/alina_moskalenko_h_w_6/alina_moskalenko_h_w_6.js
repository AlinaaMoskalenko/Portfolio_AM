import './alina_moskalenko_h_w_6.scss';
import FooterMenu from './scripts/footerMenu.js';

new FooterMenu(document.querySelectorAll('.footer-content__item-title'));

const burger = document.querySelector('.burger');
const nav = document.querySelector('.global-nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('global-nav_opened');
});
