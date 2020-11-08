import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

import { User } from 'src/app/models/user';
import { LoggerService } from './../../services/logger/logger.service';
import { StorageService } from './../../services/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;

  private authStorageKey = 'users';
  private users = this.storageService.get<User[]>(this.authStorageKey) || [];

  constructor(private storageService: StorageService,
              private logger: LoggerService) { }

  register(userData: User): void {
    this.users.push({
      id: uuid(),
      username: userData.username.toLowerCase(),
      ...userData
    });
    this.storageService.save(this.authStorageKey, this.users);
  }

  getAll(): User[] {
    return this.users;
  }

  login(loginData: User): boolean {
    if (!(loginData.password || loginData.username)) {
      this.logger.logError(`User data cannot be null or empty!`);
      return false;
    }
    const userData = this.users.find(s =>
      s.password === loginData.password
      && s.username === loginData.username.toLowerCase());

    if (!userData) {
      this.logger.logError(`User was not found!`);
      return false;
    }
    this.isLoggedIn = true;
    return true;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
