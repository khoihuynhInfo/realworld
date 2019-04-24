import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
	selector: "CommmentRoot",
    moduleId: module.id,
    template: `<page-router-outlet name="comment"></page-router-outlet>`

})
export class CommmentRootComponent implements OnInit {

	constructor(private _routerExtensions: RouterExtensions, private activeRoute: ActivatedRoute) {
	}

	ngOnInit(): void {
		this._routerExtensions.navigate([{ outlets: { comment: ["comment"] } }], { relativeTo: this.activeRoute });
	}
}