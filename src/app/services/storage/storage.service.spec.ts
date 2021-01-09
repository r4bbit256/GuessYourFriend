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
    // arrange
    spyOn(localStorage, 'setItem');

    // act
    service.save(storageKey, card);

    // assert
    expect(localStorage.setItem).toHaveBeenCalledWith(storageKey, JSON.stringify(card));
  });

  it('get method gets data by id', () => {
    // arrange
    localStorage.setItem(storageKey, JSON.stringify(card));

    // act
    const result = service.get(storageKey);

    // assert
    expect(result).toEqual(card);
  });

  it('delete method delete data by id', () => {
    // arrange
    spyOn(localStorage, 'removeItem');

    // act
    service.delete(storageKey);

    // assert
    expect(localStorage.removeItem).toHaveBeenCalledWith(storageKey);
  });

  it('clear method removes all data', () => {
    // arrange
    spyOn(localStorage, 'clear');

    // act
    service.clear();

    // assert
    expect(localStorage.clear).toHaveBeenCalledTimes(1);
  });
});
