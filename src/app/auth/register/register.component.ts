import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { AccountService } from 'src/app/services/account/account.service';

import { ApiRoutes } from 'src/app/utilities/api-routes';
import { UserInterfaceResources } from '../../utilities/user-interface.resources';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    retype: ['', Validators.required]
  });

  usernameLabel = UserInterfaceResources.UsernameLabel;
  emailLabel = UserInterfaceResources.EmailLabel;
  passwordLabel = UserInterfaceResources.PasswordLabel;
  confirmLabel = UserInterfaceResources.ConfirmLabel;
  registerLabel = UserInterfaceResources.RegisterLabel;
  haveAccountLabel = UserInterfaceResources.HaveAccountLabel;
  loginLabel = UserInterfaceResources.LoginLabel;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private snackBar: MatSnackBar,
    private router: Router) { }

  register(): void {
    if (this.registerForm.get('password').value !== this.registerForm.get('retype').value) {
      this.passwordsDoNotMatchMessage();
      this.registerForm.get('password').setValue('');
      this.registerForm.get('retype').setValue('');
    } else {
      this.accountService.register(this.registerForm.value);
      this.accountService.userName.next(this.registerForm.get('username').value);
      this.successfullyRegistered();
      this.router.navigate([ApiRoutes.Default]);
    }
  }

  private passwordsDoNotMatchMessage(): void {
    this.snackBar.open(UserInterfaceResources.PasswordDontMatch, null, {
      duration: 5000,
    });
  }

  private successfullyRegistered(): void {
    this.snackBar.open(UserInterfaceResources.SuccessfullyRegistered, null, {
      duration: 5000,
    });
  }
}
