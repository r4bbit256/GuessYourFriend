import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';
import { JwtHelperService } from '@auth0/angular-jwt';

import { User } from 'src/app/models/user';
import { StorageService } from './../../services/storage/storage.service';
import { AuthorizationToken } from 'src/app/models/authorization-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string;

  // private jwtConfig = { tokenGetter: () => this.token ? this.token : null };
  // private jwtHelperService: JwtHelperService = new JwtHelperService(this.jwtConfig);

  constructor(private storageService: StorageService) { }

  get currentUser(): User {
    const currentUser = JSON.parse(this.storageService.get('currentUser'));
    return currentUser;
  }

  // TODO: Need to implement correct flow
  // get token(): string {
  //   const token = JSON.parse(this.storageService.get('token'));
  //   return token;
  // }

  get userSessionExpirationTime(): Date {
    const expirationDate = JSON.parse(this.storageService.get('expirationDate'));
    return expirationDate;
  }

  isLoggedIn(): boolean {
    // TODO: Need to implement correct flow
    // return this.token && !this.jwtHelperService.isTokenExpired(this.token);

    const isSessionExpired = this.isSessionExpired(this.userSessionExpirationTime);

    if (isSessionExpired === null) {
      return false;
    }

    return !isSessionExpired;
  }

  clearCredentials(): void {
    this.storageService.delete('currentUser');
    this.storageService.delete('expirationDate');
  }

  setCredentials(authToken: AuthorizationToken): void {
    this.storageService.save('currentUser', authToken.user);
    this.storageService.save('expirationDate', authToken.expirationDate);
  }

  private isSessionExpired(date: Date): boolean {
    return new Date() > date;
  }
}
