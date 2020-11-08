import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { RandomUserDataGenerator } from '../../models/randomuser-data-generator';
import { Job } from 'src/app/models/job';
import { User } from 'src/app/models/user';
import { RandomUserApiService } from '../api/random-user/random-user-api.service';
import { AuthorizationToken } from 'src/app/models/authorization-token';

@Injectable({
  providedIn: 'root'
})
export class RandomDataGeneratorService {
  private privateKey = '152Ups241';
  constructor(private randomUserApi: RandomUserApiService) {}

  getRandomItemFromArray<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  getRandomNumber(top = 4, bottom = 0): number {
    return Math.floor(Math.random() * top) + bottom;
  }

  getRandomUsers(numberOfUsers: string): Observable<RandomUserDataGenerator> {
    return this.randomUserApi.getRandomUsers(numberOfUsers);
  }

  getRandomJobList(): Observable<Job[]> {
    return this.randomUserApi.getRandomJobList();
  }

  getRandomJwt(userData: User): AuthorizationToken {
    const date = new Date();
    const expDate = date.setMinutes(date.getMinutes() + 15);

    const generatedToken = JSON.stringify({
      issuer: 'GuesssYourFriendServer',
      audience: 'AllAudience',
      notBefore: date,
      expires: date,
      privateKey: this.privateKey,
      algorithm: 'RS256' });

    const authJwt: AuthorizationToken = {
      token: generatedToken,
      expirationDate: expDate.toString(),
      user: userData
    };
    return authJwt;
  }
}
