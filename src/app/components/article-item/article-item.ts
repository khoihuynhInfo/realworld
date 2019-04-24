import { Component, OnInit, Input } from "@angular/core";
import { Article } from '~/app/shared/articles/article.model';

@Component({
    selector: "article-item-comp",
    moduleId: module.id,
    templateUrl: "./article-item.html",
    styleUrls: ["./article-item.css"]
})

export class ArticleItemComponent implements OnInit {

    @Input() article: Article;


    constructor() {}

    ngOnInit() {
  
    }

}
