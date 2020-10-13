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

  it('service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('save method saves data as key/value', () => {
    spyOn(localStorage, 'setItem');
    service.save(card.id, card);
    expect(localStorage.setItem).toHaveBeenCalledWith('1', '{"id":"1","firstName":"Alex","lastName":"Lee","gender":"male"}');
  });

  it('get method get data by id', () => {
    spyOn(localStorage, 'getItem');
    service.get(card.id);
    expect(localStorage.getItem).toHaveBeenCalledWith(card.id);
  });

  it('delete method delete data by id', () => {
    spyOn(localStorage, 'removeItem');
    service.delete(card.id);
    expect(localStorage.removeItem).toHaveBeenCalledWith(card.id);
  });

  it('clear method removes all data', () => {
    spyOn(localStorage, 'clear');
    service.clear();
    expect(localStorage.clear).toHaveBeenCalled();
  });
});
