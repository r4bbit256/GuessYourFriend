import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MockAccountService } from 'src/app/services/account/mock.account.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountService } from 'src/app/services/account/account.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TestRandomDataGeneratorModule } from 'src/app/services/random-data-generator/test-random-data-generator.module';

describe('RegisterComponent', () => {
  let registerComponent: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatRadioModule,
        MatIconModule,
        MatListModule,
        MatSnackBarModule,
        NoopAnimationsModule,
        TestRandomDataGeneratorModule
      ],
      providers: [
        RegisterComponent,
        { provide: AccountService, useClass: MockAccountService },
        { provide: AccountService, useClass: MockAccountService },
      ],
      declarations: [ RegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    registerComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(registerComponent).toBeTruthy();
  });

  // fit('#register register user and redirect to default route', () => {
  //   registerComponent.registerForm.controls.username.setValue('Test');
  //   registerComponent.registerForm.controls.password.setValue('qwerty123!');
  // });
});
