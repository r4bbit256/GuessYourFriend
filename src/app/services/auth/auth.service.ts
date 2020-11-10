import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';
import { JwtHelperService } from '@auth0/angular-jwt';

import { User } from 'src/app/models/user';
import { StorageService } from './../../services/storage/storage.service';
import { AuthorizationToken } from 'src/app/models/authorization-token';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string;
  // TODO: Need to implement correct flow
  // this.token && !this.jwtHelperService.isTokenExpired(this.token);

  isLoggedIn = new BehaviorSubject(false);

  // private jwtConfig = { tokenGetter: () => this.token ? this.token : null };
  // private jwtHelperService: JwtHelperService = new JwtHelperService(this.jwtConfig);

  constructor(private storageService: StorageService) { }

  get currentUser(): User {
    try {
      const currentUser = JSON.parse(this.storageService.get('currentUser'));
      return currentUser;
    } catch (ex) {
      // TODO:
    }
  }

  // TODO: Need to implement correct flow
  // get token(): string {
  //   const token = JSON.parse(this.storageService.get('token'));
  //   return token;
  // }

  get userSessionExpirationTime(): Date {
    const expirationDate = JSON.parse(this.storageService.get('expirationDate'));
    return expirationDate;
    // TODO: add try/catch
  }

  clearCredentials(): void {
    this.storageService.delete('currentUser');
    this.storageService.delete('expirationDate');
  }

  setCredentials(authToken: AuthorizationToken): void {
    this.storageService.save('currentUser', authToken.user);
    this.storageService.save('expirationDate', authToken.expirationDate);
  }

  private isSessionExpired(): boolean {
    // TODO: fix comparing
    return new Date() > this.userSessionExpirationTime;
  }
}
