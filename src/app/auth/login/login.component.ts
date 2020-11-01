import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  login(): void {
    const userData = this.authService.login(this.loginForm.value);
    if (userData) {
      this.router.navigate(['/home']);
      this.snackBar.open('You was successfully logon!', null, {
        duration: 5000,
      });
    } else {
      this.snackBar.open('Can\'t find such user! Please verify your data and try again.', null, {
        duration: 5000,
      });
    }
  }
}
