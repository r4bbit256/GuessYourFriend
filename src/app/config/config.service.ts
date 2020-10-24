import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';

import { Config } from '../models/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = 'assets/config.json';

  constructor(private http: HttpClient) { }

  getConfig(): Observable<Config> {
    return this.http.get<Config>(this.configUrl);
  }
}
