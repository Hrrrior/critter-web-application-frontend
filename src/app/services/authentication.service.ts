import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {UserService} from "./user.service";
import {map} from "rxjs/operators";
import {UserLogin} from "../models/UserLogin";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<UserLogin>;
  public currentUser: Observable<UserLogin>;

  constructor(private userService: UserService) {
    this.currentUserSubject = new BehaviorSubject<UserLogin>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserLogin {
    return this.currentUserSubject ? this.currentUserSubject.value : undefined;
  }

  login(userPassword): Observable<UserLogin> {
    return this.userService.login(userPassword)
      .pipe(map((user: UserLogin) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
