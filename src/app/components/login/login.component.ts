import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs/operators";
import {AuthenticationService} from "../../services/authentication.service";
import {Utils} from "../../utils";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checkoutForm;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private snackBar: MatSnackBar
    // private messageService: MessageService,
  ) {
    this.checkoutForm = this.formBuilder.group({
      username: '',
      password: ''
    });
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit(userLogin) {
    console.log(userLogin);

    this.authenticationService.login(userLogin)
      .pipe(first())
      .subscribe(
        (user) => {
          // this.messageService.add('Login successful');
          this.router.navigate([this.returnUrl]);
          location.reload();
        },
        error => {
          // this.messageService.add('Login unsuccessful');
          Utils.showSnackbar(this.snackBar, `Wrong credentials!`, true);
          console.log(error);
        });
  }

}
