import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  logInfo(...value): void {
    const date = new Date();
    console.log(`@timestamp: ${date.toISOString()}, LogLevel: Info`, ...value);
  }

  logWarning(...value): void {
    const date = new Date();
    console.warn(`@timestamp: ${date.toISOString()}, LogLevel: Warning`, ...value);
  }

  logError(...value): void {
    const date = new Date();
    console.error(`@timestamp: ${date.toISOString()}, LogLevel: Error`, ...value);
  }
}
