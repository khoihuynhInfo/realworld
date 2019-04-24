import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "featuremore-comp",
    moduleId: module.id,
    templateUrl: "./featuremore.component.html",
    // styleUrls: ["./featuremore.component.css"]
})

export class FeatureMoreComp implements OnInit {
    constructor(
      private page: Page,
      private routerExtension: RouterExtensions
    ) {
   
    }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }

    onLogout() {
        // need clear token;
        this.routerExtension.navigate(["../login"], { clearHistory: true });
    }
    
}



