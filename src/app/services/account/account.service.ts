import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { LoggerService } from '../logger/logger.service';
import { StorageService } from '../storage/storage.service';
import { AuthService } from '../auth/auth.service';
import { RandomDataGeneratorService } from '../random-data-generator/random-data-generator.service';

import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private authStorageKey = 'users';
  private users = this.storageService.get<User[]>(this.authStorageKey) || [];

  constructor(private storageService: StorageService,
              private logger: LoggerService,
              private authService: AuthService,
              private randomService: RandomDataGeneratorService) { }

  register(userData: User): void {
    this.users.push({
      id: uuid(),
      username: userData.username.toLowerCase(),
      ...userData
    });

    this.randomService.getRandomJwt(userData).subscribe(jwt => {
      this.storageService.save(this.authStorageKey, this.users);
      this.authService.setCredentials(jwt);
    });
  }

  login(loginData: User): boolean {
    if (!(loginData.password || loginData.username)) {
      this.logger.logError(`User data cannot be null or empty!`);
      return false;
    }

    const userData = this.users.find(s =>
      s.password === loginData.password
      && s.username.toLowerCase() === loginData.username.toLowerCase());

    if (!userData) {
      this.logger.logError(`User was not found!`);
      return false;
    }

    this.randomService.getRandomJwt(userData).subscribe(jwt => {
      this.authService.setCredentials(jwt);
    });

    return true;
  }

  logout(): void {
    this.authService.clearCredentials();
  }
}
