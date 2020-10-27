import { TestBed } from '@angular/core/testing';

import { BaseApiRequestsService } from './base-api-requests.service';

describe('BaseApiRequestsService', () => {
  let service: BaseApiRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseApiRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
