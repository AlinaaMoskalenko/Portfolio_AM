import * as React from 'react';
import './INFOboxFooter.scss';

export class INFOboxFooter extends React.Component {
    constructor() {
        super();
        this.setFirstPostID = this.setFirstPostID.bind(this);
        this.setLastPostID = this.setLastPostID.bind(this);
        this.setPrevPostID = this.setPrevPostID.bind(this);
        this.setNextPostID = this.setNextPostID.bind(this);
        this.state = {
            ID: 0,
        }
    }

    setFirstPostID(event) {
        event.preventDefault();
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.ID = 0;
            this.props.setPostID(newState.ID);
            return newState;
        });
    }

    setPrevPostID(event) {
        event.preventDefault();
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            if (oldState.ID === 0) {
                newState.ID = oldState.ID;
            } else {
                newState.ID = oldState.ID - 1;
            }
            this.props.setPostID(newState.ID);
            return newState;
        });
    }

    setNextPostID(event) {
        event.preventDefault();
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            if (oldState.ID === (this.props.infoboxLength - 1)) {
                newState.ID = oldState.ID;
            } else {
                newState.ID = oldState.ID + 1;
            }
            this.props.setPostID(newState.ID);
            return newState;
        });
    }

    setLastPostID(event) {
        event.preventDefault();
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.ID = this.props.infoboxLength - 1;
            this.props.setPostID(newState.ID);
            return newState;
        });
    }

    render() {
        return <div className="infobox__footer">
            <div className="footer__control-btn">
                <div className="footer__button-arrow"
                    onClick={this.setFirstPostID}>
                </div>
                <div className="footer__button"
                    onClick={this.setPrevPostID}>
                    Prev
                </div>
                <div className="footer__button"
                    onClick={this.setNextPostID}>
                    Next
                </div>
                <div className="footer__button-arrow"
                    onClick={this.setLastPostID}></div>
            </div>
            <div className="footer__find-a-store">
                <div className="find-a-store__button">
                    Find a store
                </div>
                <div className="find-a-store__button-arrow"></div>
            </div>
        </div>
    }
}