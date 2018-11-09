import * as React from 'react';
import { Component } from 'react';
import { GlobalSidebar } from '../../common/components/global-sidebar/GlobalSidebar.jsx';
import { CommentList } from './comment-list/CommentList.jsx';
import { CommentForm } from './comment-form/CommentForm.jsx';
import { HTTPService } from '../../common/scripts/http-service';

const URL = 'https://evening-dawn-11092.herokuapp.com/comments';

export class App extends Component {
    constructor() {
        super();
        this.httpService = new HTTPService();
        this.onSubmit = this.onSubmit.bind(this);
        this.valueChange = this.valueChange.bind(this);
        this.onReset = this.onReset.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
        this.state = {
            comments: [],
            newAuthor: '',
            newText: '',
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        this.httpService.get(URL, (comments) => {
            this.setState((oldState) => {
                const newState = Object.assign({}, oldState);
                newState.comments = comments;
                return newState;
            });
        });
    }

    onSubmit(event) {
        event.preventDefault();
        const author = this.state.newAuthor;
        const text = this.state.newText;
        if (author && text) {
            this.httpService.post(URL, { author, text }, (comment) => {
                this.setState((oldState) => {
                    const newState = Object.assign({}, oldState);
                    newState.newAuthor = '';
                    newState.newText = '';
                    newState.comments.push(comment);
                    return newState;
                });
            });
        }
    }

    valueChange(event) {
        const value = event.target.value;
        const classListName = event.target.classList.value;

        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            if (classListName === 'comment__new-author') {
                newState.newAuthor = value;
            } else {
                newState.newText = value;
            }
            return newState;
        })
    }

    onReset() {
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.newAuthor = '';
            newState.newText = '';
            return newState;
        })
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
        return <div className='wrapper'>
            <GlobalSidebar />
            <div className="comment-page">
                <h2 className="comment-page__title">Users comments</h2>
                <div className="comment-page__content">
                    <CommentForm
                        newAuthor={this.state.newAuthor}
                        newText={this.state.newText}
                        onChange={this.valueChange}
                        onSubmit={this.onSubmit}
                        onReset={this.onReset} />
                    <CommentList
                        comments={this.state.comments}
                        onDeleteItem={this.deleteComment} />
                </div>
            </div>
        </div>
    }
}