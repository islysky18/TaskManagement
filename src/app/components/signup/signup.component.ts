import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { User } from 'src/app/shared/user.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  user: User = {
    Email: '',
    Password: '',
    ConfirmPassword: '',
  };
  form: NgForm;
  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
      this.user = {
        Email: '',
        Password: '',
        ConfirmPassword: '',
      };
    }
  }

  OnSubmit(email, password, confirmPassword) {
    //debugger;
    this.userService.registerUser(email, password, confirmPassword).subscribe(
      (error) => {
        console.log(error);
      },
      () => {
        this.resetForm(this.form);
        this.toastr.success('User Registration Successful!');
        this.router.navigate(['/login']);
      }
    );
  }

  isLoginError: boolean = false;
}
