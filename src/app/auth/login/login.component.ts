import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { AccountService } from 'src/app/services/account/account.service';
import { AuthService } from '../../services/auth/auth.service';

import { ApiRoutes } from '../../shared/utilities/api-routes';
import { UserInterfaceResources } from '../../shared/utilities/user-interface.resources';

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

  usernameLabel = UserInterfaceResources.UsernameLabel;
  passwordLabel = UserInterfaceResources.PasswordLabel;
  dontHaveAccountLabel = UserInterfaceResources.DontHaveAccountLabel;
  createAccountLabel = UserInterfaceResources.CreateAccountLabel;
  loginLabel = UserInterfaceResources.LoginLabel;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private router: Router,
    private snackBar: MatSnackBar,
    private authService: AuthService) { }

  login(): void {
    const isUserDataExist = this.accountService.login(this.loginForm.value);

    if (isUserDataExist) {
      if (this.authService.redirectUrl) {
        this.router.navigate([this.authService.redirectUrl]);
      } else {
        this.router.navigate([ApiRoutes.Default]);
      }

      this.successfulLogonMessage();
    } else {
      this.cannotFindSuchUserMessage();
    }
  }

  private cannotFindSuchUserMessage() {
    this.snackBar.open(UserInterfaceResources.CannotFindSuchUserMessage, null, {
      duration: 5000,
    });
  }

  private successfulLogonMessage() {
    this.snackBar.open(UserInterfaceResources.SuccessfulLogonMessage, null, {
      duration: 5000,
    });
  }
}
