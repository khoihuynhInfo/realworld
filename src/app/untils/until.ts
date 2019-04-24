import { Injectable } from "@angular/core";
import * as appSettings from "tns-core-modules/application-settings/application-settings";


/**
 * Util for upload avatar
 *
 * @export
 * @class storeSession
 */

@Injectable({
    providedIn: 'root',
})

export class StoreSession {
    constructor() { }

    setSession = (key: string = "", value: any) => {
        appSettings.setString(key, value);
    }
    getSetssion = (key: string = "") => {
        return appSettings.getString(key);
    }

}

