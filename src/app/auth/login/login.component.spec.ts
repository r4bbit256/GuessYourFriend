import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TestAuthService } from '../../services/auth/test-auth.service';
import { AccountService } from 'src/app/services/account/account.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TestingAccountService } from 'src/app/services/account/test-account.service';

import { LoginComponent } from './login.component';
import { ApiRoutes } from 'src/app/shared/utilities/api-routes';

describe('LoginComponent', () => {
  let loginComponent: LoginComponent;
  let accountService: AccountService;
  let authService: AuthService;
  let router: Router;
  let fixture: ComponentFixture<LoginComponent>;

  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
          ReactiveFormsModule,
          FormsModule,
          HttpClientTestingModule,
          MatFormFieldModule,
          MatButtonModule,
          MatCardModule,
          MatInputModule,
          MatSnackBarModule,
          RouterTestingModule,
          NoopAnimationsModule
        ],
        declarations: [LoginComponent],
        providers: [LoginComponent,
          { provide: AccountService, useClass: TestingAccountService},
          { provide: AuthService, useClass: TestAuthService }
        ]
      }).compileComponents();

    loginComponent = TestBed.inject(LoginComponent);
    accountService = TestBed.inject(AccountService);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);

    loginComponent.loginForm = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    loginComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(loginComponent).toBeTruthy();
  });

  it('form invlid when empty', () => {
    loginComponent.loginForm.controls.username.setValue('');
    loginComponent.loginForm.controls.password.setValue('');
    expect(loginComponent.loginForm.valid).toBeFalsy();
  });

  it('form valid when filled', () => {
    loginComponent.loginForm.controls.username.setValue('Test');
    loginComponent.loginForm.controls.password.setValue('qwerty123!');
    expect(loginComponent.loginForm.valid).toBeTruthy();
  });

  it('#login perform user login to default route (component test)', () => {
    spyOn(router, 'navigate');
    spyOn(accountService.userName, 'next');
    loginComponent.loginForm.controls.username.setValue('Test');
    loginComponent.loginForm.controls.password.setValue('qwerty123!');
    loginComponent.login();
    expect(router.navigate).toHaveBeenCalledWith([ApiRoutes.Default]);
    expect(accountService.userName.next).toHaveBeenCalledWith(loginComponent.loginForm.get('username').value);
  });

  it('#login perform user login to specific route (component test)', () => {
    spyOn(router, 'navigate');
    spyOn(accountService.userName, 'next');
    authService.redirectUrl = ApiRoutes.CardList;
    loginComponent.loginForm.controls.username.setValue('Test');
    loginComponent.loginForm.controls.password.setValue('qwerty123!');
    loginComponent.login();
    expect(router.navigate).toHaveBeenCalledWith([ApiRoutes.CardList]);
    expect(accountService.userName.next).toHaveBeenCalledWith(loginComponent.loginForm.get('username').value);
  });
});
