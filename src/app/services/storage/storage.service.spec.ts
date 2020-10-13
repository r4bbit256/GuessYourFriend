import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';
import { Card } from '../../models/card';

describe('StorageService', () => {
  let service: StorageService;
  const card: Card = {
    id: '1',
    firstName: 'Alex',
    lastName: 'Lee',
    gender: 'male'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  it('save method saves data as key/value', () => {
    // arrange
    spyOn(localStorage, 'setItem');

    // act
    service.save(card.id, card);

    // assert
    expect(localStorage.setItem).toHaveBeenCalledWith('1', '{"id":"1","firstName":"Alex","lastName":"Lee","gender":"male"}');
  });

  it('get method get data by id', () => {
    // arrange
    spyOn(localStorage, 'getItem');

    // act
    service.get(card.id);

    // assert
    expect(localStorage.getItem).toHaveBeenCalledWith(card.id);
  });

  it('delete method delete data by id', () => {
    // arrange
    spyOn(localStorage, 'removeItem');

    // act
    service.delete(card.id);

    // assert
    expect(localStorage.removeItem).toHaveBeenCalledWith(card.id);
  });

  it('clear method removes all data', () => {
    // arrange
    spyOn(localStorage, 'clear');

    // act
    service.clear();

    // assert
    expect(localStorage.clear).toHaveBeenCalled();
  });
});
