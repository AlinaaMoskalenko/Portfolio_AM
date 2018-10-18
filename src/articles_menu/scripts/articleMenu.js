export function articleMenu(targetElement) {
    const ACTIVE_ARTICLE_CLASS_NAME = 'article_active';
    const articles = targetElement.querySelectorAll('.article');
    const articleArrows = targetElement.querySelectorAll('.article__arrow-list');
    let activeElement;
    let activeIterator;

    function openArticleMenu(element, i) {
        if (activeElement !== undefined && activeIterator !== i) {
            activeElement.classList.remove(ACTIVE_ARTICLE_CLASS_NAME);
        }
        
        activeElement = element;
        activeIterator = i;
        element.classList.toggle(ACTIVE_ARTICLE_CLASS_NAME);
    }

    for (let i = 0; i < articleArrows.length; i++) {
        articleArrows[i].onclick = function () {
            openArticleMenu(articles[i], i);
        }
    }
}
