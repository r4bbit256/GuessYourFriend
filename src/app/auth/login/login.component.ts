import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { AccountService } from 'src/app/services/account/account.service';
import { AuthService } from '../../services/auth/auth.service';

import { ApiRoutes } from '../../utilities/api-routes';
import { UserInterfaceResources } from '../../utilities/user-interface.resources';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
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

    ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
    }

  login(): void {
    const isUserDataExist = this.accountService.login(this.loginForm.value);

    if (isUserDataExist) {
      if (this.authService.redirectUrl) {
        this.router.navigate([this.authService.redirectUrl]);
      } else {
        this.router.navigate([ApiRoutes.Default]);
      }

      this.accountService.userName.next(this.loginForm.get('username').value);
      this.successfulLogonMessage();
    } else {
      this.cannotFindSuchUserMessage();
    }
  }

  private cannotFindSuchUserMessage(): void {
    this.snackBar.open(UserInterfaceResources.CannotFindSuchUserMessage, null, {
      duration: 5000,
    });
  }

  private successfulLogonMessage(): void {
    this.snackBar.open(UserInterfaceResources.SuccessfulLogonMessage, null, {
      duration: 5000,
    });
  }
}
