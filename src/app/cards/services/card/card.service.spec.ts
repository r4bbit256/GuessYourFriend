import { TestBed } from '@angular/core/testing';

import { CardService } from './cards.service';
import { StorageService } from '../../../services/storage/storage.service';
import { Card } from '../../../models/card';

describe('CardsService', () => {
  let service: CardService;
  const storageService = new StorageService();
  const card: Card = {
    id: '1',
    firstName: 'John',
    lastName: 'Dow',
    gender: 'male'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xit('getCard method return value by key', () => {
    // arrange
    spyOn(storageService, 'get').and.returnValue(JSON.stringify(card));

    // act
    const result = service.getCard(card.id);

    // assert
    expect(storageService.get).toHaveBeenCalledWith(card.id);
    expect(result).toEqual(JSON.stringify(card));
  });

  xit('addCard method saves value', () => {
    // arrange
    spyOn(storageService, 'save');

    // act
    service.addCard(card);

    // assert
    expect(storageService.save).toHaveBeenCalledWith(card);
  });

  xit('delete method saves value', () => {
    // arrange
    spyOn(storageService, 'delete');

    // act
    service.deleteCard(card.id);

    // assert
    expect(storageService.delete).toHaveBeenCalledWith(card.id);
  });
});
