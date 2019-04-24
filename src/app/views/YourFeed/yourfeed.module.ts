import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { YourFeedComp } from '~/app/views/YourFeed/yourfeed.component';
import { ArticleItemComponent } from '../../components/article-item/article-item';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "yourfeed" },
            { path: "yourfeed", component: YourFeedComp },
        ]),

    ],
    declarations: [
        YourFeedComp,
        ArticleItemComponent
    ],
    providers: [
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class YourFeedModule { }
