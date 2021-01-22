import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';
import { Card } from '../../models/card';

describe('StorageService', () => {
  let service: StorageService;
  const card: Card = {
    id: '1',
    firstName: 'Alex',
    lastName: 'Lee',
    gender: 'male',
    photo: 'photo/path',
    job: 'dev'
  };
  const storageKey = 'cards';

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  it('save method saves data as key/value', () => {
    spyOn(localStorage, 'setItem');
    service.save(storageKey, card);
    expect(localStorage.setItem).toHaveBeenCalledWith(storageKey, JSON.stringify(card));
  });

  it('get method gets data by id', () => {
    localStorage.setItem(storageKey, JSON.stringify(card));
    const result = service.get(storageKey);
    expect(result).toEqual(card);
  });

  it('delete method delete data by id', () => {
    spyOn(localStorage, 'removeItem');
    service.delete(storageKey);
    expect(localStorage.removeItem).toHaveBeenCalledWith(storageKey);
  });

  it('clear method removes all data', () => {
    spyOn(localStorage, 'clear');
    service.clear();
    expect(localStorage.clear).toHaveBeenCalledTimes(1);
  });
});
