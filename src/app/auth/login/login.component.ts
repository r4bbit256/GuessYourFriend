import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { ApiRoutes } from './../../shared/utilities/api-routes';
import { AccountService } from 'src/app/services/account/account.service';

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
    private accountService: AccountService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  login(): void {
    const userData = this.accountService.login(this.loginForm.value);
    if (userData) {
      this.router.navigate([ApiRoutes.Default]);
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
