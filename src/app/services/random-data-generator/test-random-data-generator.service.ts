import { Injectable } from '@angular/core';

import { UtilityService } from '../utility/utility.service';
import { RandomDataGeneratorService } from './random-data-generator.service';
import { TestRandomUserApiService } from './../api/random-user/test-random-user-api.service';

@Injectable()
export class TestRandomDataGeneratorService {
  randomDataGeneratorService = new RandomDataGeneratorService(new TestRandomUserApiService() as any, new UtilityService());

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
