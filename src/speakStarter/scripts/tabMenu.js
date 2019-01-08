export function tabMenu(targetBtn, targetContent, props) {
    const tabs = targetBtn.querySelectorAll(props.TAB);
    const contents = targetContent.querySelectorAll(props.CONTENT);
    let activeTab = targetBtn.querySelector(props.CLASS_ACTIVE_TAB);
    let activeTabContent = targetContent.querySelector(props.CLASS_ACTIVE_CONTENT);

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].setAttribute('data-tab', i);
    }

    function attachEvents() {
        targetBtn.addEventListener('click', function (event) {
            hideTabContent(activeTabContent);
            activeTab = event.target;
            activeTabContent = contents[event.target.getAttribute('data-tab')];
            event.target.classList.add(props.ACTIVE_TAB);
            activeTabContent.classList.add(props.ACTIVE_CONTENT);
        });
    }

    function hideTabContent(content) {
        if (activeTab) {
            activeTab.classList.remove(props.ACTIVE_TAB);
            content.classList.remove(props.ACTIVE_CONTENT);
        }
    }

    attachEvents();
}