import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';

import { AuthorizationToken } from 'src/app/models/authorization-token';
import { LoggerService } from '../logger/logger.service';
import { StorageService } from '../storage/storage.service';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let authService: AuthService;
  const storageService = new StorageService();
  const loggerService = new LoggerService();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthService,
        {provide: StorageService, useValue: storageService},
        {provide: LoggerService, useValue: loggerService}
      ]
    });
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it('#setCredentials sets creds', () => {
    // arrange
    const authToken: AuthorizationToken =
      { token: 'generatedToken', expirationDate: 15, user: { id: '1', email: 'test@mail.com', password: '123#123', username: 'user', }
    };
    spyOn(storageService, 'save');
    spyOn(storageService, 'get');
    spyOn(storageService, 'delete');

    // act
    authService.setCredentials(authToken);

    // assert
    expect(storageService.save).toHaveBeenCalledWith('currentUser', authToken.user);
    expect(storageService.save).toHaveBeenCalledWith('expirationDate', authToken.expirationDate);
  });

  it('#clearCredentials removes parameters', () => {
    // arrange
    spyOn(storageService, 'delete');

    // act
    authService.clearCredentials();

    // assert
    expect(storageService.delete).toHaveBeenCalledWith('currentUser');
    expect(storageService.delete).toHaveBeenCalledWith('expirationDate');
  });
});
