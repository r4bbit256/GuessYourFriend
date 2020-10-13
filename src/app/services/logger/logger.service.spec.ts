import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerService);
    spyOn(window.console, 'log');
    spyOn(window.console, 'warn');
    spyOn(window.console, 'error');
  });

  it('service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('logInfo should log info data', () => {
    const date = new Date();
    service.logInfo('SomeErrorDescription');
    expect(window.console.log).toHaveBeenCalledWith(`@timestamp: ${date.toISOString()}, LogLevel: Info`, 'SomeErrorDescription');
  });

  it('logWarning should log warning data', () => {
    const date = new Date();
    service.logWarning('SomeErrorDescription');
    expect(window.console.warn).toHaveBeenCalledWith(`@timestamp: ${date.toISOString()}, LogLevel: Warning`, 'SomeErrorDescription');
  });

  it('logError should log error data', () => {
    const date = new Date();
    service.logError('SomeErrorDescription');
    expect(window.console.error).toHaveBeenCalledWith(`@timestamp: ${date.toISOString()}, LogLevel: Error`, 'SomeErrorDescription');
  });
});
