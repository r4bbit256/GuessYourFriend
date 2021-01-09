import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, of, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

import { StorageService } from './../../services/storage/storage.service';
import { LoggerService } from '../logger/logger.service';
import { ApiRoutes } from 'src/app/shared/utilities/api-routes';
import { AuthorizationToken } from 'src/app/models/authorization-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string;
  isLoggedIn = new BehaviorSubject(false);
  tokenSubscription = new Subscription();

  constructor(private storageService: StorageService,
              private router: Router,
              private logger: LoggerService) { }

  get userSessionExpirationTime(): number {
    try {
      return JSON.parse(this.storageService.get('expirationDate'));
    } catch (ex) {
      this.logger.logError(ex);
      this.clearCredentials();
    }
  }

  setCredentials(authToken: AuthorizationToken): void {
    this.storageService.save('currentUser', authToken.user);
    this.storageService.save('expirationDate', authToken.expirationDate);
    this.isLoggedIn.next(true);
    this.sessionExpirationCounter(this.userSessionExpirationTime);
  }

  clearCredentials(): void {
    this.storageService.delete('currentUser');
    this.storageService.delete('expirationDate');
    this.isLoggedIn.next(false);
  }

  sessionExpirationCounter(timeout: number): void {
    this.tokenSubscription.unsubscribe();
    this.tokenSubscription = of(null).pipe(delay(timeout)).subscribe(() => {
      this.clearCredentials();
      this.router.navigate([ApiRoutes.Login]);
    });
  }
}
