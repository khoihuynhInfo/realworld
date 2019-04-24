import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import { Store, select } from '@ngrx/store';
import { selectArticle } from '~/app/shared/store/selectors/articles.selectors';
import { GetComments } from '../../shared/store/actions/articles.actions';
import { selectComments } from '../../shared/store/selectors/articles.selectors';
import { Comment } from '../../shared/articles/comment.model';
import { ArticlesService } from '../../shared/articles/articles.service';
import { TextField } from "tns-core-modules/ui/text-field";


@Component({
    selector: "commnet-component",
    moduleId: module.id,
    templateUrl: "./comment.component.html",
    styleUrls: ["./comment.component.css"]
})

export class CommnetComponent implements OnInit {
    public commentText: string = "";

    comments: Array<Comment>;

    constructor(
        private page: Page,
        private store: Store<any>,
        private articlesService: ArticlesService
    ) { }

    public onTextChange(args) {
        let textField = <TextField>args.object;
        this.commentText = textField.text;
    }

    ngOnInit() {
        this.page.actionBarHidden = true;


        this.store.pipe(select(selectArticle))
            .subscribe(
                (res: any) => {
                    const slug = res.article["slug"];
                    this.store.dispatch(new GetComments(slug));
                }
            );


        this.store.pipe(select(selectComments))
            .subscribe(
                (res: any) => {
                    this.comments = res.comments;
                }
            );

    }

    dataChanged(event): void {
        console.log(event);
    }

    addComment(): void {

        this.store.pipe(select(selectArticle))
            .subscribe(
                (res: any) => {
                    const slug = res.article["slug"];
                    this.articlesService.addComment(slug, this.commentText).subscribe(res => {
                        this.store.dispatch(new GetComments(slug));
                    });
                }
            );
    }

}
