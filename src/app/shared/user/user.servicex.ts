import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { StoreSession } from '~/app/untils/until';
import { User } from "~/app/shared/user/user.model";
import { api, endpoint } from '~/app/shared/config';

import { DealHttp } from '~/app/shared/dealHttp';

@Injectable()
export class UserService {

    constructor(
        private http: Http,
        private storeSession: StoreSession,
        private dealHttp: DealHttp
    ) { }

    /**POST: login */
    login(user: User) {

        if (!user.email || !user.password) {
            return throwError(`Please provide both an 
            email address and password.`);
        }
        
        return this.http.post(
            `${api}${endpoint.login}`,
            { user: { email: user.email, password: user.password } },
            { headers: this.dealHttp.getCommonHeaders() }
        ).pipe(
            tap(res => {
                this.storeSession.setSession('user', JSON.stringify(res.json()));
            }),
            catchError(this.dealHttp.handleErrors)
        );
    }

    /** POST: Registration user  */
    registration(user: User) {
        return this.http.post(
            `${api}${endpoint.login}`,
            {
                user: {
                    username: user.email,
                    email: user.email,
                    password: user.password
                }
            },
            { headers: this.dealHttp.getCommonHeaders() }
        ).pipe(
            catchError(this.dealHttp.handleErrors)
        );
    }


}

