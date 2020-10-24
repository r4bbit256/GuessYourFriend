import { Config } from './../../models/config';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { LoggerService } from './../logger/logger.service';
import { ConfigService } from 'src/app/config/config.service';
import { RandomUserDataGenerator } from '../../models/randomuser-data-generator';
import { Job } from 'src/app/models/job';

@Injectable({
  providedIn: 'root'
})
export class RandomDataGeneratorService {
  randomJobPositions: string;
  randomUserApiUrl: string;

  constructor(private http: HttpClient,
              private logger: LoggerService,
              private configService: ConfigService) {}

  getRandomUserList(numberOfUsers: number): Observable<RandomUserDataGenerator> {
    // TODO: replace url with ${this.randomUserApiUrl}
    return this.http.get<RandomUserDataGenerator>(`https://randomuser.me/api?inc=name,gender,login,email,picture&results=${numberOfUsers}`);
  }

  getRandomJobList(): Observable<Job[]> {
    // TODO: replace url with ${this.randomJobPositions}
    return this.http.get<Job[]>('assets/data/randomJobPositions.json');
  }

  getRandomItemFromArray<TResult>(array: any): TResult {
    return array[Math.floor(Math.random() * array.length)];
  }

  // TODO: planned to use in requests
  private setConfigData(): void {
    this.configService.getConfig()
      .subscribe((data: Config) => {
        this.randomJobPositions = data.randomJobPositions;
        this.randomUserApiUrl = data.randomUserApiUrl;
      });
  }

  // TODO: planned to use in requests
  private handleError(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      this.logger.logError('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      this.logger.logError(`Backend returned code ${error.status}, body was: ${error.error}`);
    }

    return throwError(
      'Something bad happened; please try again later.');
  }
}
