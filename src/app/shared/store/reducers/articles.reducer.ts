import {
    ArticlesAction,
    ActionTypes
} from '~/app/shared/store/actions/articles.actions';

// GlobalFeed | YourFeed | MyArticles
const initialState = {
    articles: [],
    kindArticles: "GlobalFeed",
    articlesmore: []
};

export const articlesReducer = (
    state = initialState,
    action: ArticlesAction
) => {
    switch (action.type) {
        case ActionTypes.GetArticlesSuccess:
            return { ...state, articles: action.payload };
        case ActionTypes.GetArticlesFaild:
            return { ...state };
        default:
            return state;
    }
}