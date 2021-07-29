import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { BaseApiRequestsService } from './base-api-requests.service';

describe('BaseApiRequestsService', () => {
  let service: BaseApiRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(BaseApiRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
