import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ArticlesService } from '~/app/shared/articles/articles.service';
import { ActionTypes } from '~/app/shared/store/actions/articles.actions';

@Injectable()
export class ArticlesEffect {

    @Effect()
    loadArticles$ = this.action$
        .pipe(
            ofType(ActionTypes.GetArticles),
            mergeMap( (res ) => {
                const kindArticle = res["kindArticle"] || false;
                return this.articlesService.fetchArticles(res["offset"], kindArticle).pipe(
                    map((articles) => {
                        return ({ type: ActionTypes.GetArticlesSuccess, payload: articles })
                    }),
                    catchError(() => of({ type: ActionTypes.GetArticlesFaild }))
                )
            })

        )


    @Effect()
    loadDetailArticles$ = this.action$
        .pipe(
            ofType(ActionTypes.GetDetailArticle),
            switchMap(res => {
                const slug = res["slug"] || "";
                return this.articlesService.fetchArticleDetail(slug).pipe(
                    map((article) => {
                        return ({ type: ActionTypes.GetDetailArticleSuccess, payload: article })
                    }),
                    catchError(() => of({ type: ActionTypes.GetDetailArticleFaild }))
                )
            })
        )

    @Effect()
    loadCommentsArticles$ = this.action$
        .pipe(
            ofType(ActionTypes.GetComments),
            switchMap(res => {
                const slug = res["slug"] || "";
                return this.articlesService.fetchCommnets(slug).pipe(
                    map((comments) => {
                        return ({ type: ActionTypes.GetCommentsSuccess, payload: comments })
                    }),
                    catchError(() => of({ type: ActionTypes.GetCommentsFaild }))
                )
            }
            )
        )


    constructor(
        private action$: Actions,
        private articlesService: ArticlesService
    ) { }
}