import './articles_menu.scss';
import { articleMenu } from './scripts/articleMenu';

const articleHtmlElements = document.querySelectorAll('.wrapper');

for (let i = 0; i < articleHtmlElements.length; i++) {
    articleMenu(articleHtmlElements[i]);
}

