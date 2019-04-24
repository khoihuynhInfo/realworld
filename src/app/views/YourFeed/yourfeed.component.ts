import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import { Increment, Decrement, Reset } from '~/app/shared/store/actions/counter.actions';

import { Store, select } from '@ngrx/store';

import { selectArticleList } from '~/app/shared/store/selectors/articles.selectors';
import { IAppState } from '~/app/shared/store/state/app.state';
import { Article } from '~/app/shared/articles/article.model';
import { BehaviorSubject } from "rxjs";
import { ArticlesService } from '~/app/shared/articles/articles.service';

@Component({
    selector: "yourfeed-comp",
    moduleId: module.id,
    templateUrl: "./yourfeed.component.html",
    styleUrls: ["./yourfeed.component.css"]
})

export class YourFeedComp implements OnInit {

    lengthList: number = 0;
    articles: Array<Article> = [];
    isBusy$: BehaviorSubject<Boolean>;
    constructor(
        private page: Page,
        private articlesService: ArticlesService,
        private store: Store<IAppState>,
    ) { }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
        this.store.pipe(select(selectArticleList))
            .subscribe((res: any) => this.articles = res.articles);
        this.isBusy$ = this.articlesService.getIsBusy();
    }



}
