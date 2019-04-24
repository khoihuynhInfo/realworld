import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import { selectArticleList } from '~/app/shared/store/selectors/articles.selectors';
import { Store, select } from '@ngrx/store';
import { IAppState } from '~/app/shared/store/state/app.state';
import { isIOS, device, } from "tns-core-modules/platform/platform";
import { GetArticles } from '~/app/shared/store/actions/articles.actions';
import { Article } from '~/app/shared/articles/article.model';

declare const UIApplication: any;

@Component({
    selector: "globalfeed-comp",
    moduleId: module.id,
    templateUrl: "./globalfeed.component.html",
    styleUrls: ["./globalfeed.component.css"]
})

export class GlobalFeedComp implements OnInit {
    lengthList: number = 0;
    isBusy: boolean = true;
    articles: Array<Article> = [];
    paddingBottom = 0;

    constructor(
        private page: Page,
        private store: Store<IAppState>,
    ) {

    }

    ngOnInit() {
        const osVersion: number = +device.osVersion.replace(/^(\d+(?:\.\d+)).*$/, '$1');

        this.page.actionBarHidden = true;

        this.store.pipe(select(selectArticleList))
            .subscribe(
                (res: any) => {
                    this.articles = res.articles;
                    if (res && res.articles && res.articles.length) {

                        console.log('res', res);
                        this.lengthList = this.articles.length;
                        this.isBusy = false;
                    }
                }
            );

        if (isIOS && osVersion >= 11.0) {
            const window = UIApplication.sharedApplication.keyWindow;
            this.paddingBottom = window.safeAreaInsets.bottom;
        }

    }

    loadMoreItems(): void {
        console.log('load more');
        this.store.dispatch(new GetArticles(1));
    }



}
