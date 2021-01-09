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

  fit('#getUTCDateInMilliseconds return UTC Date in Miliseconds', () => {
    // arrange
    const date = new Date();
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();
    const day = date.getUTCDay();
    const hour = date.getUTCHours();
    const minutes = date.getUTCMinutes() + 15;

    // act
    const dateInMiliseconds = utilityService.getUTCDateInMilliseconds(0, 0, 0, 0, 15);

    // assert
    expect(dateInMiliseconds).toEqual(Date.UTC(year, month, day, hour, minutes));
  });

  it('#getMinutesInMilliseconds return minutes in Miliseconds', () => {
    // arrante
    const requiredResult = 900000;

    // act
    const minutesInMiliseconds = utilityService.getMinutesInMilliseconds(15);

    // assert
    expect(minutesInMiliseconds).toEqual(requiredResult);
  });
});
