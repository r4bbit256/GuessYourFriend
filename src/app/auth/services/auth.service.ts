import { Injectable } from '@angular/core';

import { User } from 'src/app/models/user';
import { LoggerService } from './../../services/logger/logger.service';
import { StorageService } from './../../services/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authStorageKey = 'users';
  private users = this.storageService.get<User[]>(this.authStorageKey) || [];

  constructor(private storageService: StorageService,
              private logger: LoggerService) { }

  addUser(userData: User): void {
    this.storageService.save(this.authStorageKey, userData);
  }

  getAll(): User[] {
    return this.users;
  }

  getUser(key: string): User {
    if (!key) {
      this.logger.logError(`Key cannot be null or empty, key: ${key}`);
    }

    const userData = this.users.find(s => s.id === key);

    if (!userData) {
      this.logger.logError(`User was not found by key: ${key}`);
    }

    return userData;
  }
}
