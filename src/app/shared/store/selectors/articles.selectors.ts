import { createSelector } from '@ngrx/store';
import { IAppState } from '~/app/shared/store/state/app.state';
import { IArticlesState } from '~/app/shared/store/state/articles.state';
import { IDetailArticleState } from '~/app/shared/store/state/detail-article.state'; 

const selectArticles = (state: IAppState) => state.articles;
const selectDetailArticle = (state: IAppState) => state.detailArticle;

export const selectArticleList = createSelector(
    selectArticles,
    (state: IArticlesState) => state.articles
)

export const selectArticle = createSelector(
    selectDetailArticle,
    (state: IDetailArticleState) => state.article
)

export const selectComments = createSelector(
    selectDetailArticle,
    (state: IDetailArticleState) => state.comments
)