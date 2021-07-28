import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

import { Job } from 'src/app/models/job';
import { RandomUserDataGenerator } from 'src/app/models/randomuser-data-generator';
import { LoggerService } from '../../logger/logger.service';
import { BaseApiRequestsService } from '../base-api-requests.service';

@Injectable({
  providedIn: 'root',
})
export class TestRandomUserApiService {
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  apiService = new BaseApiRequestsService(this.httpClientSpy as any, new LoggerService());

  constructor() {}

  getRandomUsers(numberOfUsers: string): Observable<RandomUserDataGenerator> {
    const expectedUsers: RandomUserDataGenerator = {
      results: [
        {
          gender: 'female',
          name: { first: 'Stephanie', last: 'Porter' },
          email: 'stephanie.porter@example.com',
          login: {
            uuid: 'eba1312b-1b68-4f12-83f1-fafa9c67c69f',
          },
          picture: {
            large: 'https://randomuser.me/api/portraits/women/58.jpg',
            medium: 'https://randomuser.me/api/portraits/med/women/58.jpg',
            thumbnail: 'https://randomuser.me/api/portraits/thumb/women/58.jpg',
          },
        },
      ],
      info: { seed: 'fc8f179b0b6c085d', results: 1, page: 1, version: '1.3' },
    };

    return this.httpClientSpy.get.and.returnValue(of(expectedUsers));
  }

  getRandomJobList(): Observable<Job[]> {
    const expectedJobList: Job[] = [{ job: 'Software Engineer' }, { job: 'Software QA Engineer' }];
    return this.httpClientSpy.get.and.returnValue(of(expectedJobList));
  }
}
