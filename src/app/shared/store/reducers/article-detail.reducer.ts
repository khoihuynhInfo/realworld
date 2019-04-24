import {
    ArticlesAction,
    ActionTypes
} from '~/app/shared/store/actions/articles.actions';


const initialState = {
    article: [],
    comments: [],
};

export const detailArticleReducer = (
    state = initialState,
    action: ArticlesAction
) => {
    switch (action.type) {
        case ActionTypes.GetDetailArticleSuccess:
            return { ...state, article: action.payload };
        case ActionTypes.GetDetailArticleFaild:
            return { ...state };
        case ActionTypes.GetComments:
            return { ...state };
        case ActionTypes.GetCommentsSuccess:
            return { ...state, comments: action.payload };
        case ActionTypes.GetCommentsFaild:
            return { ...state };
        default:
            return state;
    }
}