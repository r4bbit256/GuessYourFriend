import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from '../auth/auth.service';
import { LoggerService } from '../logger/logger.service';
import { StorageService } from '../storage/storage.service';
import { AccountService } from './account.service';

import { TestRandomDataGeneratorModule } from '../random-data-generator/test-random-data-generator.module';

import { User } from 'src/app/models/user';
import { MockAuthService } from '../auth/mock.auth.service';

describe('AccountService', () => {
  let accountService: AccountService;
  const storageService = new StorageService();
  const loggerService = new LoggerService();
  const userData: User = {
    id: '1',
    username: 'Test',
    password: 'qwerty123',
    email: 'test@mail.com'
  };

  beforeEach(() => {
    spyOn(loggerService, 'logError');
    spyOn(storageService, 'get').and.returnValue([userData]);
    spyOn(storageService, 'save');

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TestRandomDataGeneratorModule
      ],
      providers: [AccountService,
        {provide: StorageService, useValue: storageService},
        {provide: LoggerService, useValue: loggerService},
        {provde: AuthService, useClass: MockAuthService}
      ]
    });
    accountService = TestBed.inject(AccountService);
  });

  it('should be created', () => {
    expect(accountService).toBeTruthy();
  });

  it('#login invalid creds, login failed, logs error and returns false', () => {
    const isUserLogin = accountService.login(new User());
    expect(isUserLogin).toBeFalse();
    expect(loggerService.logError).toHaveBeenCalledWith(`User data cannot be null or empty!`);
  });

  it('#login user didn\'t found, login failed, logs error and returns false', () => {
    const notExistUser: User = {
      id: '2',
      username: 'Mike',
      password: 'qwerty123',
      email: 'test@mail.com'
    };
    const isUserLogin = accountService.login(notExistUser);
    expect(isUserLogin).toBeFalse();
    expect(loggerService.logError).toHaveBeenCalledWith(`User was not found!`);
  });

  it('#login valid creds, user found, login success, returns true', () => {
    const isUserLogin = accountService.login(userData);
    expect(isUserLogin).toBeTrue();
  });

  it('#register add new user to collection', () => {
    const newUser: User = {
      id: '2',
      username: 'Mike',
      password: 'qwerty123',
      email: 'test@mail.com'
    };
    accountService.register(newUser);
    expect(storageService.save).toHaveBeenCalledWith('users', [userData, newUser]);
  });
});
