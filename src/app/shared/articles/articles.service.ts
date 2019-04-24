import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { catchError, map } from "rxjs/operators";
import { api, endpoint } from '~/app/shared/config';
import { DealHttp } from '~/app/shared/dealHttp';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})

export class ArticlesService {

    private isBusy$ = new BehaviorSubject(false);


    getIsBusy(): BehaviorSubject<Boolean> {
        return this.isBusy$;
    }

    constructor(
        private http: Http,
        private dealHttp: DealHttp,
    ) { }

    /**GET: LIST Articles, LIST Feed Articles */
    fetchArticles(offset: number = 0, kindFetch?: boolean) {


        this.isBusy$.next(true);

        const correctEndpoint = kindFetch
            ? endpoint.feedArticles
            : endpoint.articles;

        const baseUrl: string = `${api}${correctEndpoint}?limit=15&offset=${offset}`;

        return this.http.get(
            baseUrl,
            {
                headers: kindFetch
                    ? this.dealHttp.getCommonHeaders(true)
                    : this.dealHttp.getCommonHeaders()
            },
        ).pipe(
            tap(res => {
                if (res) {
                    this.isBusy$.next(false);
                }
            }),
            map(res => res.json()),
            catchError(this.dealHttp.handleErrors)
        )
    }

    /**GET: Detail Article*/
    fetchArticleDetail(slug: string) {

        this.isBusy$.next(true);

        const baseUrl: string = `${api}${endpoint.articles}/${slug}`;
        return this.http.get(
            baseUrl,
            { headers: this.dealHttp.getCommonHeaders() },
        ).pipe(
            map(res => res.json()),
            tap(res => {
                if (res) {
                    this.isBusy$.next(false);
                }
            }),
            catchError(this.dealHttp.handleErrors)
        )

    }

    /**GET: Detail Article*/
    fetchCommnets(slug: string) {
        const baseUrl: string = `${api}${endpoint.articles}/${slug}/comments`;
        return this.http.get(
            baseUrl,
            { headers: this.dealHttp.getCommonHeaders() },
        ).pipe(
            map(res => res.json()),
            catchError(this.dealHttp.handleErrors)
        )
    }

    /**POST: Add Commnets */
    addComment(slug: string, comment: string) {
        const baseUrl: string = `${api}${endpoint.articles}/${slug}/comments`;
        return this.http.post(
            baseUrl,
            JSON.stringify(
                { comment: { body: comment } }
            ),
            { headers: this.dealHttp.getCommonHeaders(true) },
        ).pipe(
            map(res => res.json()),
            catchError(this.dealHttp.handleErrors)
        )
    }
    
    /**POST: Add Article */
    createArticle(article?: Object) {
        const baseUrl: string = `${api}${endpoint.articles}`;
        return this.http.post(
            baseUrl,
            JSON.stringify(
                {
                    article: {
                        title: "How to train your dragon",
                        description: "Ever wonder how?",
                        body: "You have to believe",
                        tagList: ["reactjs", "angularjs", "dragons"]
                    }
                }
            ),
            { headers: this.dealHttp.getCommonHeaders(true) },
        ).pipe(
            map(res => res.json()),
            catchError(this.dealHttp.handleErrors)
        )
    }







}
