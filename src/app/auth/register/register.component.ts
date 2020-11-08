import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { AccountService } from 'src/app/services/account/account.service';
import { ApiRoutes } from 'src/app/shared/utilities/api-routes';

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

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private snackBar: MatSnackBar,
    private router: Router) { }


  register(): void {
    if (this.registerForm.get('password').value !== this.registerForm.get('retype').value) {
      this.snackBar.open('Passwords do not match. Please try again.', null, {
        duration: 5000,
      });
      this.registerForm.get('password').setValue('');
      this.registerForm.get('retype').setValue('');
    } else {
      this.accountService.register(this.registerForm.value);
      this.snackBar.open('You successfully registered.', null, {
        duration: 5000,
      });
      this.router.navigate([ApiRoutes.Default]);
    }
  }
}
