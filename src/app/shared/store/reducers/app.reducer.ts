import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '~/app/shared/store/state/app.state';

import { counterReducer } from '~/app/shared/store/reducers/counter.reducer';
import { articlesReducer } from '~/app/shared/store/reducers/articles.reducer';
import { detailArticleReducer } from '~/app/shared/store/reducers/article-detail.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
    count: counterReducer,
    articles: articlesReducer,
    detailArticle: detailArticleReducer
};



