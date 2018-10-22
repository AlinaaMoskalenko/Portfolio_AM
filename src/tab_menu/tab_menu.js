import './tab_menu.scss';
import { tabMenu } from "./scripts/tabMenu";

const tabHtmlTitles = document.querySelector('.article-title');
const tabHtmlContents = document.querySelector('.article-content');

tabMenu(tabHtmlTitles, tabHtmlContents);