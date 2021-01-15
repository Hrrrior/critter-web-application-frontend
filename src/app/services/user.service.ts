import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserRegister} from "../models/UserRegister";
import {Observable} from "rxjs";
import {UserLogin} from "../models/UserLogin";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'api/users';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  register(userPassword: UserRegister): Observable<any> {
    return this.http.post<UserRegister>(`${this.userUrl}/register`, userPassword, this.httpOptions);
  }

  login(userPassword: UserRegister): Observable<UserLogin> {
    return this.http.post<UserLogin>(`${this.userUrl}/login`, userPassword, this.httpOptions);
  }
}
