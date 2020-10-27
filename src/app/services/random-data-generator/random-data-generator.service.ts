import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { RandomUserDataGenerator } from '../../models/randomuser-data-generator';
import { Job } from 'src/app/models/job';
import { RandomUserApiService } from '../api/random-user/random-user-api.service';

@Injectable({
  providedIn: 'root'
})
export class RandomDataGeneratorService {

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
}
