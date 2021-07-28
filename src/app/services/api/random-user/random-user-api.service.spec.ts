import { TestRandomUserApiService } from './test-random-user-api.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RandomUserApiService } from './random-user-api.service';
import { BaseApiRequestsService } from '../base-api-requests.service';

import { RandomUserDataGenerator } from './../../../models/randomuser-data-generator';
import { Job } from 'src/app/models/job';

describe('RandomUserApiService', () => {
  let service: RandomUserApiService;
  const apiService = new TestRandomUserApiService();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: BaseApiRequestsService, useExist: apiService }],
    });
    service = TestBed.inject(RandomUserApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getRandomUsers should return user', () => {
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

    service.getRandomUsers('1').subscribe((response) => expect(response).toEqual(expectedUsers, 'expected users'));
  });

  it('#getRandomJobList', () => {
    const expectedJobList: Job[] = [{ job: 'Software Engineer' }, { job: 'Software QA Engineer' }];
    service.getRandomJobList().subscribe((response) => expect(response).toEqual(expectedJobList));
  });
});
