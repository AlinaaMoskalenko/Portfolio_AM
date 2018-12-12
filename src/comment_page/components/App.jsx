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
        this.deleteComment = this.deleteComment.bind(this);
        this.state = {
            comments: [],
            sidebar_menu: [
                {
                    title: 'Home page',
                    href: '/WA/index.html',
                    // href: 'index.html',
                },
                {
                    title: 'Sidebar',
                    href: '/WA/sidebar_react.html',
                    // href: 'sidebar_react.html',
                },
                {
                    title: 'Mac',
                    href: 'https://www.apple.com/mac/',
                },
                {
                    title: 'iPhone',
                    href: 'https://www.apple.com/iphone/',
                },
                {
                    title: 'Watch',
                    href: 'https://www.apple.com/watch/',
                },
                {
                    title: 'Music',
                    href: 'https://www.apple.com/music/',
                },
                {
                    title: 'Support',
                    href: 'https://support.apple.com/',
                },
            ],
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

    onSubmit(formData) {
        const author = formData.newAuthor;
        const text = formData.newText;
        if (author && text) {
            this.httpService.post(URL, { author, text }, (comment) => {
                this.setState((oldState) => {
                    const newState = Object.assign({}, oldState);
                    newState.comments.push(comment);
                    return newState;
                });
            });
        }
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
            <GlobalSidebar links={this.state.sidebar_menu} />
            <div className="comment-page">
                <h2 className="comment-page__title">Users comments</h2>
                <div className="comment-page__content">
                    <CommentForm
                        newAuthor={this.state.newAuthor}
                        newText={this.state.newText}
                        onSubmit={this.onSubmit} />
                    <CommentList
                        comments={this.state.comments}
                        onDeleteItem={this.deleteComment} />
                </div>
            </div>
        </div>
    }
}