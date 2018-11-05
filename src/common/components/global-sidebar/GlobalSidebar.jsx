import * as React from 'react';
import './GlobalSidebar.scss';

export class GlobalSidebar extends React.Component {
    constructor() {
        super();
        this.toggleMenu = this.toggleMenu.bind(this);
        this.state = {
            isOpened: false,
        };
    }

    toggleMenu() {
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.isOpened = !oldState.isOpened;
            return newState;
        });
    }

    render() {
        let classNames = 'sidebar ';
        let classToggleNames = 'sidebar__toggle '
        if (this.state.isOpened) {
            classNames += 'sidebar_opened';
            classToggleNames += 'sidebar__toggle_opened'
        }

        return <aside className={classNames}>
            <div className={classToggleNames} onClick={this.toggleMenu}>
                <div className="toggle__row"></div>
                <div className="toggle__row"></div>
            </div>
            <div className="sidebar__items">
                <a href="" className="sidebar__link">Mac</a>
                <a href="" className="sidebar__link">IPhone</a>
                <a href="" className="sidebar__link">IPad</a>
                <a href="" className="sidebar__link">Watch</a>
                <a href="" className="sidebar__link">Music</a>
                <a href="" className="sidebar__link">Support</a>
                <a href="" className="sidebar__link">Users comments</a>
                </div>
        </aside>
    }
}