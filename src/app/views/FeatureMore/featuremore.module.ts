import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { FeatureMoreComp } from '~/app/views/FeatureMore/featuremore.component';
import { NewArticleComp } from '../FeatureMore/NewArticle/newarticle.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "featuremore" },
            { path: "featuremore", component: FeatureMoreComp },
            { path: "newarticle", component: NewArticleComp}
        ])
    ],
    declarations: [
        FeatureMoreComp,
        NewArticleComp
    ],
    providers: [
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class FeatureMoreModule { }
