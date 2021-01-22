import { Injectable } from '@angular/core';

import { RandomDataGeneratorService } from './random-data-generator.service';

@Injectable({providedIn: 'root'})
export class TestRandomDataGeneratorService {

  constructor(private randomDataGeneratorService: RandomDataGeneratorService ) {}

  getRandomNumber(): jasmine.Spy {
    return spyOn(this.randomDataGeneratorService, 'getRandomNumber').and.callThrough();
  }

  getRandomItemFromArray(): jasmine.Spy {
    return spyOn(this.randomDataGeneratorService, 'getRandomItemFromArray').and.callThrough();
  }

  getRandomJwt(): jasmine.Spy {
    return spyOn(this.randomDataGeneratorService, 'getRandomJwt').and.callThrough();
  }

  getRandomJobList(): jasmine.Spy {
    return spyOn(this.randomDataGeneratorService, 'getRandomJobList').and.callThrough();
  }

  getRandomUsers(): jasmine.Spy {
    return spyOn(this.randomDataGeneratorService, 'getRandomUsers').and.callThrough();
  }
}
