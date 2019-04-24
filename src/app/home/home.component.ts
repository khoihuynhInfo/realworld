import { Component, OnInit } from "@angular/core";
import { ArticlesService } from '~/app/shared/articles/articles.service';
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view/tab-view";
import { Page } from "tns-core-modules/ui/page/page";
this.page.actionBarHidden = true;
@Component({
    selector: "Home",
    moduleId: module.id,
    providers: [ArticlesService],
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(
        private page: Page
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
        // Init your component properties here.
    }

    onSelectedIndexChanged(args: SelectedIndexChangedEventData): void {
        console.log(`Selected index has changed ( Old index: ${args.oldIndex} New index: ${args.newIndex} )`);
    }


}
