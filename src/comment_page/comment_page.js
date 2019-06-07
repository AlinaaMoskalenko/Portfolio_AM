import './comment_page.scss';

import { CommentForm } from './scripts/commentForm';
import { UserComment } from './scripts/userComment';

new CommentForm(document.querySelector('#formForComments'));
const allComments = new UserComment(document.querySelector('#existComments'));
allComments.getComments();
