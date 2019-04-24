import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable, throwError } from "rxjs";
import { StoreSession } from '../untils/until';

@Injectable({
    providedIn: 'root',
})

export class DealHttp {

    constructor(
        private storeSession: StoreSession
    ) { }

    private getToken() {
        const token = JSON.parse(this.storeSession.getSetssion('user')).user.token || "";
        return token;
    }

    getCommonHeaders(isAuthorized: boolean = false) {

        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        
        if (isAuthorized === true) {
            const jwt = this.getToken();
            headers.append("Authorization", `Token ${jwt}`)
        }

        console.log('header', headers);
        return headers;
    }

    handleErrors(error: Response) {
        console.log("Error", JSON.stringify(error.json()));
        return throwError(error.json());
        // return Observable.throw(error); 
    }

}

