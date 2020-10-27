import { TestBed } from '@angular/core/testing';

import { RandomUserApiService } from './random-user-api.service';

describe('RandomuserApiService', () => {
  let service: RandomUserApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomUserApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
