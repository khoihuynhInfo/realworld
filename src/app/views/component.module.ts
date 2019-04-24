import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";


import { LoginComponent } from "~/app/views/Login/login.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        
    ],
    declarations: [
        LoginComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ComponentModule { }
