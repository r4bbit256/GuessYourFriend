import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerService);
  });

  it('#logInfo should log info data', () => {
    const date = new Date();
    spyOn(window.console, 'log');
    service.logInfo('SomeErrorDescription');
    expect(window.console.log).toHaveBeenCalled();
  });

  it('#logWarning should log warning data', () => {
    const date = new Date();
    spyOn(window.console, 'warn');
    service.logWarning('SomeErrorDescription');
    expect(window.console.warn).toHaveBeenCalled();
  });

  it('#logError should log error data', () => {
    const date = new Date();
    spyOn(window.console, 'error');
    service.logError('SomeErrorDescription');
    expect(window.console.error).toHaveBeenCalled();
  });
});
