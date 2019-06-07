import './CommentForm.scss';
import * as React from 'react';

const MONTHS = ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'];

export class CommentForm extends React.Component {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onReset = this.onReset.bind(this);
        this.state = {
            isSubmited: false,
            isValidAuthor: true,
            isValidText: true,
            author: '',
            text: ''
        }
    }

    onChange({ target }) {
        const { type, value } = target;

        if (type === 'text') {
            this.setState({ author: value, isValidAuthor: true });
        } else {
            this.setState({ text: value, isValidText: true });
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const { onSubmit } = this.props;
        const { author, text } = this.state;

        let valid = true;
        if (!author) {
            valid = false;
            this.setState({ isValidAuthor: false });
        }

        if (!text) {
            valid = false;
            this.setState({ isValidText: false });
        }

        this.setState({ isSubmited: true });

        if (valid) {
            onSubmit(this.state);
            this.setState({ author: '', text: '' });
        }
    }

    onReset() {
        this.setState({ author: '', text: '' });
    }

    render() {
        const date = new Date();
        const dateString = MONTHS[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();

        const { isValidAuthor, isValidText, isSubmited, author, text } = this.state;

        const inputClassName = 'comment__new-author ' + (!isValidAuthor && isSubmited && 'comment__new-author_empty');
        const textareaClassName = 'comment__new-text ' + (!isValidText && isSubmited && 'comment__new-text_empty');

        return <form className="comment-page__form"
            onSubmit={this.onSubmit}
            onReset={this.onReset}>
            <div className="comment__current-date">{dateString}</div>
            <input className={inputClassName}
                type="text"
                placeholder="Enter your full name (eg. John Smith)"
                onChange={this.onChange} 
                value={author} />
            <textarea className={textareaClassName}
                rows="7"
                cols="30"
                placeholder="Write your comment"
                onChange={this.onChange}
                value={text} />
            <div className="comment__action">
                <button className="action__button" type="submit">Send</button>
                <button className="action__button" type="reset">Cancel</button>
            </div>
        </form>
    }
}
