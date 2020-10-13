import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerService);
  });

  it('logInfo should log info data', () => {
    // arrange
    const date = new Date();
    spyOn(window.console, 'log');

    // act
    service.logInfo('SomeErrorDescription');

    // assert
    expect(window.console.log).toHaveBeenCalledWith(`@timestamp: ${date.toISOString()}, LogLevel: Info`, 'SomeErrorDescription');
  });

  it('logWarning should log warning data', () => {
    // arrange
    const date = new Date();
    spyOn(window.console, 'warn');

    // act
    service.logWarning('SomeErrorDescription');

    // assert
    expect(window.console.warn).toHaveBeenCalledWith(`@timestamp: ${date.toISOString()}, LogLevel: Warning`, 'SomeErrorDescription');
  });

  it('logError should log error data', () => {
    // arrange
    const date = new Date();
    spyOn(window.console, 'error');

    // act
    service.logError('SomeErrorDescription');

    // assert
    expect(window.console.error).toHaveBeenCalledWith(`@timestamp: ${date.toISOString()}, LogLevel: Error`, 'SomeErrorDescription');
  });
});
