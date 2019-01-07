const TAB = '.nav__tab';
const CONTENT = '.main__tab-content';
const ACTIVE_TAB = 'nav__tab_active';
const ACTIVE_CONTENT = 'main__tab-content_opened';

export function tabMenu(targetBtn, targetContent) {
    const tabs = targetBtn.querySelectorAll(TAB);
    const contents = targetContent.querySelectorAll(CONTENT);
    let activeTab = targetBtn.querySelector('.nav__tab_active');
    let activeTabContent = targetContent.querySelector('.main__tab-content_opened');

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].setAttribute('data-tab', i);
    }

    // из attachEvents можно выделить еще одну функцию, которая отображает контент showTabContent
    function attachEvents() {
        targetBtn.addEventListener('click', function (event) {
            hideTabContent(activeTabContent);
            activeTab = event.target;
            activeTabContent = contents[event.target.getAttribute('data-tab')];
            event.target.classList.add(ACTIVE_TAB);
            activeTabContent.classList.add(ACTIVE_CONTENT);
        });
    }

    function hideTabContent(content) {
        if (activeTab) {
            activeTab.classList.remove(ACTIVE_TAB);
            content.classList.remove(ACTIVE_CONTENT);
        }
    }

    attachEvents();
}