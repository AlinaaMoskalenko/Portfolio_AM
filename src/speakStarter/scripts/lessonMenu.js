import { tabMenu } from './tabMenu';

export function lessonMenu(lessonTabs, lessonContents) {
    let props = {
        TAB: '.nav__tab',
        CONTENT: '.main__tab-content',
        CLASS_ACTIVE_TAB: '.nav__tab_active',
        CLASS_ACTIVE_CONTENT: '.main__tab-content_opened',
        ACTIVE_TAB: 'nav__tab_active',
        ACTIVE_CONTENT: 'main__tab-content_opened',
    }

    tabMenu(lessonTabs, lessonContents, props);
}