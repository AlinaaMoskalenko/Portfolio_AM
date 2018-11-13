import './CommentList.scss';
import * as React from 'react';

const MONTHS = ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'];

export class CommentList extends React.Component {
    render() {
        const commentList = this.props.comments.map((comment, i) => {
            const id = 'ID' + comment.id;

            const date = new Date(comment.date);
            const dateString = date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds() +
                " " + MONTHS[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();

            const deleteComment = () => {
                this.props.onDeleteItem(comment.id);
            }

            return <div key={i} className="comment" id={id}>
                <div className="comment__header">
                    <h4 className="comment__author">
                        {comment.author}
                    </h4>
                    <button className="comment__delete"
                        onClick={deleteComment}>
                        Delete
                    </button>
                </div>
                <div className="comment__text">
                    {comment.text}
                </div>
                <div className="comment__date">
                    {dateString}
                </div>
            </div>
        }).reverse();

        return <div className="comment-page__list">
            {commentList}
        </div>
    }
}