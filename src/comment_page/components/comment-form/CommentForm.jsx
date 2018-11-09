import './CommentForm.scss';
import * as React from 'react';

const MONTHS = ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'];

export class CommentForm extends React.Component {
    render() {
        const date = new Date();
        const dateString = MONTHS[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();

        /*
        Для добавления красной рамки вокруг полей введения данных, 
        когда при нажатии на send там были пустые поля
        
        let classNamesAuthor = 'comment__new-author ';
        let classNamesText = 'comment__new-text ';

        if (!this.props.newAuthor || !this.props.newText) {
            classNamesAuthor += 'comment__new-author_empty';
            classNamesText += 'comment__new-text_empty';
        }
        */

        return <form className="comment-page__form"
            onSubmit={this.props.onSubmit}
            onReset={this.props.onReset}>
            <div className="comment__current-date">{dateString}</div>
            <input className="comment__new-author"
                type="text"
                placeholder="Enter your full name (eg. John Smith)"
                onChange={this.props.onChange}
                value={this.props.newAuthor} />
            <textarea className="comment__new-text"
                rows="5"
                cols="30"
                placeholder="Write your comment"
                onChange={this.props.onChange}
                value={this.props.newText}>
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
