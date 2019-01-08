import { tabMenu } from './tabMenu';

export function balanceMenu(balanceTabs, balanceContents) {
    let props = {
        TAB: '.balance__tab-content',
        CONTENT: '.balance__diagram',
        CLASS_ACTIVE_TAB: '.balance__tab-content_active',
        CLASS_ACTIVE_CONTENT: '.balance__diagram_opened',
        ACTIVE_TAB: 'balance__tab-content_active',
        ACTIVE_CONTENT: 'balance__diagram_opened',
    }

    tabMenu(balanceTabs, balanceContents, props);
}