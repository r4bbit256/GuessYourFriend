import { AuthorizationToken } from 'src/app/models/authorization-token';

import { Observable, of } from 'rxjs';

import { User } from 'src/app/models/user';

export class MockRandomDataGeneratorService {
  getRandomNumber(top = 4, bottom = 0): number {
    return Math.floor(Math.random() * top) + bottom;
  }

  getRandomItemFromArray<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  getRandomJwt(userData: User): Observable<AuthorizationToken> {
    return of({
      token: 'generatedToken',
      expirationDate: 90000,
      user: userData
    });
  }
}
