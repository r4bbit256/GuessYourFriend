import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { RandomUserDataGenerator } from '../../../models/randomuser-data-generator';
import { Job } from '../../../models/job';
import { Config } from '../../../models/config';
import { ConfigService } from '../../../config/config.service';
import { BaseApiRequestsService } from '../base-api-requests.service';

@Injectable({
  providedIn: 'root'
})
export class RandomUserApiService {
  randomUserApiUrl: string;
  randomJobPositionsUrl: string;

  constructor(private baseApiRequests: BaseApiRequestsService,
              private configService: ConfigService) { }

  getRandomUsers(numberOfUsers: string): Observable<RandomUserDataGenerator> {
    numberOfUsers = this.getDefaultUsersNumberForRequest(numberOfUsers);
    // TODO: replace hardcoded parameter with one from config.json
    const baseRandomUserUrl = 'https://randomuser.me';
    this.randomUserApiUrl = `${baseRandomUserUrl}/api?inc=name,gender,login,email,picture&results`;
    return this.baseApiRequests.get<RandomUserDataGenerator>(`${this.randomUserApiUrl}=${numberOfUsers}`);
  }

  getRandomJobList(): Observable<Job[]> {
    // TODO: replace randomJobPositions with one from config
    this.randomJobPositionsUrl = 'assets/data/randomJobPositions.json';
    return this.baseApiRequests.get<Job[]>(this.randomJobPositionsUrl);
  }

  private getDefaultUsersNumberForRequest(numberOfUsers: string): string {
    if (numberOfUsers === '') {
        return '8';
    } else {
      return numberOfUsers;
    }
  }

  // TODO: read config.json parameters and assign values
  private setConfigData(): void {
    this.configService.getConfig()
      .subscribe((data: Config) => {
        this.randomJobPositionsUrl = data.randomJobPositions;
        this.randomUserApiUrl = data.randomUserApiUrl;
      });
  }
}
