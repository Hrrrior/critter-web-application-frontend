import {Component, OnInit} from '@angular/core';
import {UserLogin} from "../../models/UserLogin";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  user: UserLogin;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.user = this.authenticationService.currentUserValue
  }
}
