import { TestBed } from '@angular/core/testing';

import { CardService } from './cards.service';
import { StorageService } from '../storage/storage.service';
import { Card } from '../../models/card';
import { HttpClient } from '@angular/common/http';

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

  storageService.save('cards', [card]);

  beforeEach(() => {
    TestBed.configureTestingModule(
      {providers: [CardService,
        {provide: HttpClient, useValue: jasmine.createSpyObj('HttpClient', ['get'])},
        {provide: StorageService, useValue: storageService}]
      });
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

  it('getCard method return value by key', () => {
    // act
    const result = cardService.getCard(card.id);

    // assert
    expect(result).toEqual(card);
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
