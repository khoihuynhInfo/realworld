import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import { Increment, Decrement, Reset } from '~/app/shared/store/actions/counter.actions';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ArticlesService } from '../../shared/articles/articles.service';

@Component({
    selector: "yourfeed-comp",
    moduleId: module.id,
    templateUrl: "./yourfeed.component.html",
    styleUrls: ["./yourfeed.component.css"]
})

export class YourFeedComp implements OnInit {
    count$: Observable<number>;

    groceryList: Array<Object> = [];


    constructor(
        private page: Page,
        private store: Store<{ count: number }>,
        private articlesService: ArticlesService
    ) {
        this.count$ = store.pipe(select('count'));
    }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
        this.groceryList.push({ name: "Apples" });
        this.groceryList.push({ name: "Bananas" });
        this.groceryList.push({ name: "Oranges" });
        this.groceryList.push({ name: "Oranges" });
        this.groceryList.push({ name: "Oranges" });
        this.groceryList.push({ name: "Oranges" });
        this.groceryList.push({ name: "Oranges" });

        this.articlesService.fetchArticles(0, true).subscribe(res => {
            console.log("YOUR FEED", res);
        });
    }
    

    increment() {
        this.store.dispatch(new Increment());
    }

    decrement() {
        this.store.dispatch(new Decrement());
    }

    reset() {
        this.store.dispatch(new Reset());
    }



}
