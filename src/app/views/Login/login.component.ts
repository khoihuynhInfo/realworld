import { Component, OnInit } from "@angular/core";
import { User } from '~/app/shared/user/user.model';
import { Page } from "tns-core-modules/ui/page/page";
import { Router } from "@angular/router";
import { UserService } from '~/app/shared/user/user.servicex';

@Component({
    selector: "login-component",
    moduleId: module.id,
    providers: [UserService],
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {
    user: User;
    isBusy: boolean = false;
    constructor(
        private userService: UserService,
        private page: Page,
        private router: Router
    ) {
        this.user = new User();
    }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }


    login(): void {
        this.isBusy = true;
        this.userService.login(this.user)
            .subscribe(
                () => {
                    this.isBusy = false;
                    this.router.navigate(["/tabs/default"]);
                },
                () => {
                    this.isBusy = false;
                    alert('Email or Password Invalid!');
                }
            );
    }
}
