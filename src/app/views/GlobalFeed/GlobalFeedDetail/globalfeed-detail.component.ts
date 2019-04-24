import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular/modal-dialog";
import { Subscription, BehaviorSubject } from "rxjs";
import { Store, select } from '@ngrx/store';
import { GetDetailArticle } from '~/app/shared/store/actions/articles.actions';
import { selectArticle } from '~/app/shared/store/selectors/articles.selectors';
import { Article } from '~/app/shared/articles/article.model';
import { ArticlesService } from '~/app/shared/articles/articles.service';
import { CommmentRootComponent } from '../../Comment/comment-root.component';

@Component({
    selector: "globalfeed-detail-comp",
    moduleId: module.id,
    templateUrl: "./globalfeed-detail.component.html",
    styleUrls: ["./globalfeed-detail.component.css"]
})

export class GlobalFeedDetailComponent implements OnInit {
    article: Article;
    subscription: Subscription;
    // isBusy: boolean = true;
    isBusy$: BehaviorSubject<Boolean>;

    constructor(
        private routerExtensions: RouterExtensions,
        private route: ActivatedRoute,
        private store: Store<any>,
        private articlesService: ArticlesService,
        private modalService: ModalDialogService,
        private vcRef: ViewContainerRef
    ) { }

    ngOnInit(): void {

        this.subscription = this.route.params.subscribe(params => {
            const slug = params["id"];
            this.store.dispatch(new GetDetailArticle(slug));
        });

        this.store.pipe(select(selectArticle))
            .subscribe(
                (res: any) => {
                    this.article = res.article;
                }
            );

        this.isBusy$ = this.articlesService.getIsBusy();

    }


    goBack() {
        this.routerExtensions.backToPreviousPage();
    }

    openModelCommnet(): void {
        const options: ModalDialogOptions = {
            fullscreen: true,
            viewContainerRef: this.vcRef
        };

        this.modalService.showModal(CommmentRootComponent, options);
    }


}
