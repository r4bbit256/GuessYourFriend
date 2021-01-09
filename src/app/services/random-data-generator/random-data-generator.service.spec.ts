import { TestBed } from '@angular/core/testing';

import { Observable, of } from 'rxjs';

import { UtilityService } from '../utility/utility.service';
import { RandomDataGeneratorService } from './random-data-generator.service';

import { AuthorizationToken } from 'src/app/models/authorization-token';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';

describe('RandomDataGeneratorService', () => {
  let randomDataService: RandomDataGeneratorService;
  const utilityService = new UtilityService();

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [
      RandomDataGeneratorService,
      { provide: HttpClient, useValue: jasmine.createSpyObj('HttpClient', ['get'])},
      { provide: UtilityService, useValue: utilityService}]});
    randomDataService = TestBed.inject(RandomDataGeneratorService);
  });

  it('should be created', () => {
    expect(randomDataService).toBeTruthy();
  });

  it('#getRandomItemFromArray returns random item from specifi array', () => {
    // arrange
    const array = ['apple', 'orange', 'pineapple', 'banana', 'apricot'];

    // act
    const result = randomDataService.getRandomItemFromArray(array);

    // assert
    expect(result).toEqual(array.find(item => item === result));
  });

  it('#getRandomJwt returns jwt', () => {
    // arrange
    const userData = {id: '1', email: 'test@mail.com', username: 'user', password: 'test@123'} as User;
    const token: AuthorizationToken = {
        token: 'generatedToken',
        expirationDate: 90000,
        user: userData
    };
    spyOn(utilityService, 'getMinutesInMilliseconds').and.returnValue(90000);

    // act
    randomDataService.getRandomJwt(userData).toPromise().then(result => {
      // assert
      expect(result).toEqual(token);
    });
  });
});
