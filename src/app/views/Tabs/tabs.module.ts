import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "nativescript-angular/router";

import { NativeScriptCommonModule } from "nativescript-angular/common";
import { TabsComponent } from '~/app/views/Tabs/tabs.component';


@NgModule({
    imports: [
        NativeScriptCommonModule, 
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            {
                path: "default", component: TabsComponent, children: [
                    { 
                        path: "yourfeed", 
                        outlet: "yourfeed",
                        // component: YourFeedComp
                        component: NSEmptyOutletComponent, 
                        loadChildren: "~/app/views/YourFeed/yourfeed.module#YourFeedModule" 
                    },
                    { 
                        path: "globalfeed", 
                        outlet: "globalfeed",
                        component: NSEmptyOutletComponent, 
                        loadChildren: "~/app/views/GlobalFeed/globalfeed.module#GlobalFeedModule" 
                    },
                    { 
                        path: "featuremore", 
                        outlet: "featuremore",
                        component: NSEmptyOutletComponent, 
                        loadChildren: "~/app/views/FeatureMore/featuremore.module#FeatureMoreModule" 
                    },
                ]
            }
        ])
    ],
    declarations: [
        TabsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TabsModule { }