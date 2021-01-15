import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  checkoutForm;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    // private messageService: MessageService,
    private router: Router,
  ) {
    this.checkoutForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(userPassword) {
    this.userService.register(userPassword)
      .pipe(first())
      .subscribe(
        () => {
          // this.messageService.add('Registration successful');
          this.router.navigate(['/login']);
        },
        error => {
          // this.messageService.add('Registration unsuccessful');
          console.log(error);
        });
  }
}
