import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "~/app/app-routing.module";
import { AppComponent } from "~/app/app.component";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { ComponentBoard } from "~/app/app-routing.module";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { StoreModule } from '@ngrx/store';
import { appReducers } from '~/app/shared/store/reducers/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ArticlesEffect } from '~/app/shared/store/effects/articles.effect';

import { CommmentRootComponent } from './views/Comment/comment-root.component';


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule,
        NativeScriptHttpModule,
        NativeScriptUIListViewModule,

        StoreModule.forRoot(appReducers),
        EffectsModule.forRoot([ArticlesEffect])
    ],
    entryComponents: [
        CommmentRootComponent,
    ],

    declarations: [
        AppComponent,
        CommmentRootComponent,
        ...ComponentBoard,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
