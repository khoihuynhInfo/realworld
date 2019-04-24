import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { GlobalFeedComp } from '~/app/views/GlobalFeed/globalfeed.component';
import { GlobalFeedDetailComponent } from '~/app/views/GlobalFeed/GlobalFeedDetail/globalfeed-detail.component';
import { CommnetComponent } from '../Comment/comment.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "globalfeed" },
            { path: "globalfeed", component: GlobalFeedComp },
            {
                path: "globalfeeddetail/:id", component: GlobalFeedDetailComponent, children: [
                    { path: "comment", component: CommnetComponent, outlet: "comment" },
                ]
            },
        ])
    ],
    declarations: [
        GlobalFeedComp,
        GlobalFeedDetailComponent,
        CommnetComponent,
    ],
    providers: [
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class GlobalFeedModule { }
