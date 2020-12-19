import { TestBed } from '@angular/core/testing';

import { CardService } from './cards.service';
import { StorageService } from '../storage/storage.service';
import { Card } from '../../models/card';

describe('CardsService', () => {
  let cardService: CardService;
  const storageService = new StorageService();
  const card: Card = {
    id: '1',
    firstName: 'John',
    lastName: 'Dow',
    gender: 'male',
    photo: '',
    job: 'dev'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    cardService = TestBed.inject(CardService);
  });

  it('should be created', () => {
    expect(cardService).toBeTruthy();
  });

  it('addCard method saves value', () => {
    // arrange
    spyOn(storageService, 'save');

    // act
    cardService.addCard(card);

    // assert
    expect(storageService.save).toHaveBeenCalledWith('cards', card);
  });

  xit('getCard method return value by key', () => {
    // arrange
    spyOn(storageService, 'get').and.returnValue(JSON.stringify(card));

    // act
    const result = cardService.getCard(card.id);

    // assert
    expect(storageService.get).toHaveBeenCalledWith(card.id);
    expect(result).toEqual(JSON.stringify(card));
  });

  it('delete method saves value', () => {
    // arrange
    spyOn(storageService, 'delete');

    // act
    cardService.deleteCard(card.id);

    // assert
    expect(storageService.delete).toHaveBeenCalledWith(card.id);
  });
});
