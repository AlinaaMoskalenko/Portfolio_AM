import './CommentForm.scss';
import * as React from 'react';

const MONTHS = ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'];

export class CommentForm extends React.Component {
    constructor() {
        super();
        this.changeAuthor = this.changeAuthor.bind(this);
        this.changeText = this.changeText.bind(this);
        this.state = {
            isSubmited: false,
            isValidAuthor: true,
            isValidText: true,
            newAuthor: '',
            newText: '',
        }
    }

    changeAuthor(event) {
        const value = event.target.value;

        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.newAuthor = value;
            newState.isValidAuthor = true;
            return newState;
        });

       
    }

    changeText(event) {
        const value = event.target.value;

        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.newText = value;
            newState.isValidText = true;
            return newState;
        });
    }

    onSubmit(e) {
        e.preventDefault();

        if (!this.state.newAuthor) {
            this.setState((oldState) => {
                const newState = Object.assign({}, oldState);
                newState.isValidAuthor = false;
                return newState;
            });
        }

        if (!this.state.newText) {
            this.setState((oldState) => {
                const newState = Object.assign({}, oldState);
                newState.isValidText = false;
                return newState;
            });
        }

        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.isSubmited = true;
            return newState;
        });

        if (this.state.newAuthor && this.state.newText) {
            this.props.onSubmit(this.state);
            this.setState((oldState) => {
                const newState = Object.assign({}, oldState);
                newState.newAuthor = '';
                newState.newText = '';
                return newState;
            });
        }
    }

    onReset() {
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.newAuthor = '';
            newState.newText = '';
            return newState;
        })
    }

    render() {
        const date = new Date();
        const dateString = MONTHS[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();

        return <form className="comment-page__form"
            onSubmit={this.onSubmit.bind(this)}
            onReset={this.onReset.bind(this)}>
            <div className="comment__current-date">{dateString}</div>
            <input className={"comment__new-author" + (!this.state.isValidAuthor && this.state.isSubmited ? ' comment__new-author_empty' : '')}
                type="text"
                placeholder="Enter your full name (eg. John Smith)"
                onChange={this.changeAuthor}
                value={this.state.newAuthor} />
            <textarea className={"comment__new-text" + (!this.state.isValidText && this.state.isSubmited ? ' comment__new-text_empty' : '')}
                rows="5"
                cols="30"
                placeholder="Write your comment"
                onChange={this.changeText}
                value={this.state.newText}>
            </textarea>
            <div className="comment__action">
                <button className="action__button"
                    type="submit">
                    Send
                </button>
                <button className="action__button"
                    type="reset">
                    Cancel
                </button>
            </div>
        </form>
    }
}
