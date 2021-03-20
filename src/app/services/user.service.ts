import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  baseURL: 'https://localhost:44326/api/Account/Register';
  registerUser(email, password, confirmPassword) {
    //debugger;
    const body: User = {
      Email: email,
      Password: password,
      ConfirmPassword: confirmPassword,
    };
    return this.http.post(this.baseURL, body);
  }
}
