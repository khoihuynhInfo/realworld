import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "articledetail-comp",
    moduleId: module.id,
    templateUrl: "./articledetail.component.html",
    styleUrls: ["./articledetail.component.css"]
})

export class ArticlesDetailComponent implements OnInit {


    constructor(private routerExtensions: RouterExtensions) {
    }

    ngOnInit() {

    }


    public goBack() {
        this.routerExtensions.backToPreviousPage();
    }
}
