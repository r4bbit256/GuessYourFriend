import { AuthorizationToken } from 'src/app/models/authorization-token';

import { Observable, of } from 'rxjs';

import { User } from 'src/app/models/user';
import { Job } from 'src/app/models/job';
import { RandomUserDataGenerator } from 'src/app/models/randomuser-data-generator';

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

  getRandomJobList(): Observable<Job[]> {
    return of([{ job: 'QA' }]);
  }

  getRandomUsers(numberOfUsers: string): Observable<RandomUserDataGenerator> {
    return of({
      results: [{
        gender: 'male', name: { title: 'Mr', first: 'Melvin', last: 'Perry', }, email: 'melvin.perry@example.com',
        login: {
          uuid: 'bbf2dcb6-f513-4440-a0e8-b59518b29165', username: 'tinyleopard741', password: '1999',
          salt: '0ufnsrcA', md5: 'd8afddc698ea2d429c1a74a3e6c14bc2',
          sha1: 'efe59c382d187e49170aed7d54bc2f812a716484', sha256: '6d9d438cfb99dd66f550414d421991c2b8b403ee75a93e5a340d5180bfcf721a',
        },
        picture: {
          large: '35.jpg',
          medium: '35.jpg',
          thumbnail: '35.jpg',
        },
      }],
      info: {
        seed: '4d4c901d0d290ae2',
        results: 1,
        page: 1,
        version: '1.3',
      }});
  }
}
