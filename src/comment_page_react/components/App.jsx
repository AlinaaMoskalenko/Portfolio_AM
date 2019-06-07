import * as React from 'react';
import { Component } from 'react';
import { CommentList } from './comment-list/CommentList.jsx';
import { CommentForm } from './comment-form/CommentForm.jsx';
import { HTTPService } from '../../common/scripts/http-service';

const URL = 'https://evening-dawn-11092.herokuapp.com/comments';

export default class App extends Component {
    constructor () {
        super();
        this.httpService = new HTTPService();
        this.onSubmit = this.onSubmit.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
        this.state = {
            comments: []
        };
    }
    
    componentDidMount() {
        this.httpService.get(URL, (comments) => {
            this.setState({ comments });
        });
    }

    onSubmit({ author, text }) {
        this.httpService.post(URL, { author, text }, (comment) => {
            this.setState(({ comments }) => {
                const newArray = [ ...comments, comment ];
                return {
                    comments: newArray
                };
            });
        });
    }

    deleteComment(commentId) {
        this.httpService.delete(URL + '/' + commentId, () => {
            this.setState((oldState) => {
                const newState = Object.assign({}, oldState);
                newState.comments = newState.comments.filter((comment) => comment.id !== commentId);
                return newState;
            });
        });
    }

    render() {
        const { comments } = this.state;

        return (
            <div className="comment-page">
                <h2 className="comment-page__title">Welcome to comment page!</h2>
                <div className="comment-page__content">
                    <CommentList
                            comments={comments}
                            onDeleteItem={this.deleteComment} />
                    <CommentForm
                        onSubmit={this.onSubmit} />
                </div>
            </div>
        );
    }
}