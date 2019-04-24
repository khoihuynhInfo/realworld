import { Comment } from '../../articles/comment.model';

export interface IDetailArticleState {
    article: Object,
    comments: Array<Comment>
}