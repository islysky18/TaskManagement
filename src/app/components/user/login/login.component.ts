import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenParams } from 'src/app/shared/TokenParams';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  isLoginError: boolean = false;
  ngOnInit(): void {}

  tokenParams: TokenParams;

  // DoLogin(): void {
  //   this.authService.validateUser(this.username, this.password);
  // }
  OnSubmit(userName, password) {
    this.authService.validateUser(userName, password).subscribe(
      (data: any) => {
        localStorage.setItem('userToken', data.access_token);
        this.router.navigate(['/quotes']);
      },
      (err: HttpErrorResponse) => {
        this.isLoginError = true;
      }
    );
  }
}
