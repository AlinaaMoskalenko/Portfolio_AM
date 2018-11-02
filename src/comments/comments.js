import './comments.scss';

import { CommentForm } from './scripts/commentForm';
import { UserComment } from './scripts/userComment';
import { HTTPService } from './scripts/http-service';

new CommentForm(document.querySelector('#formForComments'));
const allComments = new UserComment(document.querySelector('#existComments'));
allComments.getComments();
