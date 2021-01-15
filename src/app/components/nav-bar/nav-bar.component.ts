import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from "../../services/authentication.service";
import {UserLogin} from "../../models/UserLogin";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  user: UserLogin;

  constructor(private router: Router,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.user = this.authenticationService.currentUserValue;
  }

  navigateHome(): void {
    this.router.navigate(['/']);
  }

  navigateRegister(): void {
    this.router.navigate(['/register']);
  }

  navigateLogin(): void {
    this.router.navigate(['/login']);
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/']);
    location.reload();
  }
}
