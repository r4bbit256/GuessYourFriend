import { TestBed } from '@angular/core/testing';

import { UtilityService } from './utility.service';

describe('UtilityService', () => {
  let utilityService: UtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    utilityService = TestBed.inject(UtilityService);
  });

  it('should be created', () => {
    expect(utilityService).toBeTruthy();
  });

  it('#getUTCDateInMilliseconds return UTC Date in Miliseconds', () => {
    const date = new Date();
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();
    const day = date.getUTCDay();
    const hour = date.getUTCHours();
    const minutes = date.getUTCMinutes() + 15;
    const dateInMiliseconds = utilityService.getUTCDateInMilliseconds(0, 0, 0, 0, 15);
    expect(dateInMiliseconds).toEqual(Date.UTC(year, month, day, hour, minutes));
  });

  it('#getMinutesInMilliseconds return minutes in Miliseconds', () => {
    const requiredResult = 900000;
    const minutesInMiliseconds = utilityService.getMinutesInMilliseconds(15);
    expect(minutesInMiliseconds).toEqual(requiredResult);
  });
});
