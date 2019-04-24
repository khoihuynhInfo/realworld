import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { Page } from "tns-core-modules/ui/page/page";
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view/tab-view";
import { GetArticles } from '~/app/shared/store/actions/articles.actions';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
    moduleId: module.id,
    selector: "tabs-page",
    templateUrl: "./tabs.component.html"
})

export class TabsComponent implements OnInit {
    articles$: Observable<any>;
    constructor(
        private activeRoute: ActivatedRoute,
        private routerExtension: RouterExtensions,
        private page: Page,
        private store: Store<{ articles: any }>
    ) {
        this.articles$ = store.pipe(select('articles'));
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.routerExtension.navigate([
            {
                outlets: {
                    yourfeed: ["yourfeed"],
                    globalfeed: ["globalfeed"],
                    featuremore: ["featuremore"]
                }
            }
        ], { relativeTo: this.activeRoute });
    }

    onSelectedIndexChanged(args: SelectedIndexChangedEventData): void {
        console.log(`Selected index has changed ( Old index: ${args.oldIndex} New index: ${args.newIndex} )`);
        switch (args.newIndex) {
            case 0:
                return;
            case 1:
                this.store.dispatch(new GetArticles(0));
                return;
            default:
                return
        }

    }


}