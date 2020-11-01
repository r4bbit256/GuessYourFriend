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
      ...userData
    });
    this.storageService.save(this.authStorageKey, this.users);
  }

  getAll(): User[] {
    return this.users;
  }

  login(key: string): User {
    if (!key) {
      this.logger.logError(`Key cannot be null or empty, key: ${key}`);
    }
    this.isLoggedIn = true;
    const userData = this.users[key];

    if (!userData) {
      this.logger.logError(`User was not found by key: ${key}`);
    }

    return userData;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
