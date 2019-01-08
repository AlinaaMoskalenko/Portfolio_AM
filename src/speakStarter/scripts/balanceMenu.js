export function balanceMenu(balanceTabs, balanceContents) {
    const tabs = balanceTabs.querySelectorAll('.balance__tab-content');
    const contents = balanceContents.querySelectorAll('.balance__diagram');
    let activeTab = balanceTabs.querySelector('.balance__tab-content_active');
    let activeTabContent = balanceContents.querySelector('.balance__diagram_opened');

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].setAttribute('data-tab', i);
    }

    function attachEvents() {
        balanceTabs.addEventListener('click', function (event) {
            hideTabContent(activeTabContent);
            activeTab = event.target;
            activeTabContent = contents[event.target.getAttribute('data-tab')];
            event.target.classList.add('balance__tab-content_active');
            activeTabContent.classList.add('balance__diagram_opened');
        });
    }

    function hideTabContent(content) {
        if (activeTab) {
            activeTab.classList.remove('balance__tab-content_active');
            content.classList.remove('balance__diagram_opened');
        }
    }

    attachEvents();

}