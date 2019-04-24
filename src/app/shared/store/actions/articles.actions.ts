import { Action } from '@ngrx/store';

export enum ActionTypes {
    GetArticles = '[Articles Component] Get Articles Request',
    GetArticlesSuccess = '[Articles Component] Get Articles Success',
    GetArticlesFaild = '[Articles Component] Get Articles Faild',

    GetDetailArticle = '[Article Detail Component] Get Detail Article Request',
    GetDetailArticleSuccess = '[Article Detail Component] Get Detail Article Success',
    GetDetailArticleFaild = '[Article Detail Component] Get Detail Article Faild',

    GetComments = '[Article Comments Component] Get Comments Article Request',
    GetCommentsSuccess = '[Article Comments Component] Get Comments Article Success',
    GetCommentsFaild = '[Article Comments Component] Get Comments Article Faild',
}

// LIST ARTICLES
export class GetArticles implements Action {
    readonly type = ActionTypes.GetArticles;
    constructor(public offset) { }
}

export class GetArticlesSuccess implements Action {
    readonly type = ActionTypes.GetArticlesSuccess;
    constructor(public payload) { }
}

export class GetArticlesFaild implements Action {
    readonly type = ActionTypes.GetArticlesFaild;
    constructor(public payload) { }
}
// DETAIL ARTICLE
export class GetDetailArticle implements Action {
    readonly type = ActionTypes.GetDetailArticle;
    constructor(public slug) { }
}
export class GetDetailArticleSuccess implements Action {
    readonly type = ActionTypes.GetDetailArticleSuccess;
    constructor(public payload) { }
}
export class GetDetailArticleFaild implements Action {
    readonly type = ActionTypes.GetDetailArticleFaild;
    constructor(public payload) { }
}

// DETAIL COMMENTS
export class GetComments implements Action {
    readonly type = ActionTypes.GetComments;
    constructor(public slug) {}
}

export class GetCommentsSuccess implements Action {
    readonly type = ActionTypes.GetCommentsSuccess;
    constructor(public payload) {}
}

export class GetCommentsFaild implements Action {
    readonly type = ActionTypes.GetCommentsFaild;
    constructor(public payload) {}
}

export type ArticlesAction = GetArticles
    | GetArticlesSuccess
    | GetArticlesFaild
    | GetDetailArticle
    | GetDetailArticleSuccess
    | GetDetailArticleFaild
    | GetComments
    | GetCommentsSuccess
    | GetCommentsFaild