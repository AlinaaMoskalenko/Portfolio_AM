const ARTICLE_TITLE = '.article-title__title';
const ARTICLE_CONTENT = '.article-content__content';
const ACTIVE_TITLE_TAB = 'article-title__title_active';
const ACTIVE_CONTENT = 'article-content__content_active';

export function tabMenu(targetTitle, targetContent) {
    const titles = targetTitle.querySelectorAll(ARTICLE_TITLE);
    const contents = targetContent.querySelectorAll(ARTICLE_CONTENT);
    let activeTab = targetTitle.querySelector('.article-title__title_active');
    let activeTabContent = targetContent.querySelector('.article-content__content_active');

    for (let i = 0; i < titles.length; i++) {
        titles[i].setAttribute('data-title', i);
    }

    // attachEvents 
    function attachEvents() {
        targetTitle.addEventListener('click', function (event) {
            if (activeTab) {
                activeTab.classList.remove(ACTIVE_TITLE_TAB);
                activeTabContent.classList.remove(ACTIVE_CONTENT);
            }
            // hiddenTabOption(activeTabContent);
            activeTab = event.target;
            activeTabContent = contents[event.target.getAttribute('data-title')];
            event.target.classList.add(ACTIVE_TITLE_TAB);
            activeTabContent.classList.add(ACTIVE_CONTENT);
        });
    }

    // function hiddenTabOption(content) {
    //     if (activeTab) {
    //         activeTab.classList.remove(ACTIVE_TITLE_TAB);
    //         content.classList.remove(ACTIVE_CONTENT);
    //     }
    // }

    attachEvents();
}