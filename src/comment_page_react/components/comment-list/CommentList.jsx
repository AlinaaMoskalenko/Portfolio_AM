import './CommentList.scss';
import * as React from 'react';

const MONTHS = ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'];

export class CommentList extends React.Component {
    render() {
        const { comments, onDeleteItem } = this.props;
        const commentList = comments.map(({ id, date, author, text }) => {
            const newDate = new Date(date);

            const dateString = newDate.getHours() + ':' + newDate.getMinutes() + ":" + newDate.getSeconds() +
                " " + MONTHS[newDate.getMonth()] + " " + newDate.getDate() + ", " + newDate.getFullYear();

            const deleteComment = () => onDeleteItem(id);

            return <div key={id} className="comment">
                <div className="comment__header">
                    <h4 className="comment__author">{ author }</h4>
                    <button className="comment__delete" onClick={deleteComment}>Delete</button>
                </div>
                <div className="comment__text">{text}</div>
                <div className="comment__date">{dateString}</div>
            </div>
        });

        return (
            <div className="comment-page__list">
                {commentList}
            </div>
        );
    }
}