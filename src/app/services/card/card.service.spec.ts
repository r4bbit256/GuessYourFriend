import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { CardService } from './cards.service';
import { StorageService } from '../storage/storage.service';
import { RandomDataGeneratorService } from '../random-data-generator/random-data-generator.service';

import { Card } from '../../models/card';
import { RandomUserApiService } from '../api/random-user/random-user-api.service';
import { UtilityService } from '../utility/utility.service';
import { BaseApiRequestsService } from '../api/base-api-requests.service';
import { ConfigService } from 'src/app/config/config.service';

describe('CardsService', () => {
  let cardService: CardService;
  const cardsStorageKey = 'cards';
  const storageService = new StorageService();
  let randomDataService: RandomDataGeneratorService;
  const card1: Card = {
    id: '1',
    firstName: 'John',
    lastName: 'Dow',
    gender: 'male',
    photo: '',
    job: 'Dev'
  };
  const card2: Card = {
    id: '2',
    firstName: 'Jack',
    lastName: 'Black',
    gender: 'male',
    photo: '',
    job: 'QA'
  };
  const card3: Card = {
    id: '3',
    firstName: 'Drake',
    lastName: 'Brown',
    gender: 'male',
    photo: '',
    job: 'Junior BA'
  };
  const updatedCard: Card = {
    id: '1',
    firstName: 'John',
    lastName: 'Doll',
    gender: 'male',
    photo: '',
    job: 'ATQC'
  };

  beforeEach(() => {
    TestBed.configureTestingModule(
      {providers: [CardService,
        {provide: HttpClient, useValue: jasmine.createSpyObj('HttpClient', ['get'])},
        {provide: StorageService, useValue: storageService},
        {provide: RandomDataGeneratorService, useValue: randomDataService}]
      });
    cardService = TestBed.inject(CardService);
    storageService.clear();
  });

  afterEach(() => {
    storageService.clear();
  });

  it('should be created', () => {
    expect(cardService).toBeTruthy();
  });

  it('addCard method saves card', () => {
    // arrange
    spyOn(storageService, 'save');

    // act
    cardService.addCard(card2);

    // assert
    expect(storageService.save).toHaveBeenCalledWith(cardsStorageKey, [card2]);
  });

  it('addCards method saves array of cards', () => {
    // arrange
    spyOn(storageService, 'save');

    // act
    cardService.addCards([card1, card2]);

    // assert
    expect(storageService.save).toHaveBeenCalledWith(cardsStorageKey, [card1, card2]);
  });

  xit('getCard method return value by key', () => {
    // arrange
    spyOn(storageService, 'get').and.returnValue([card3]);

    // act
    const result = cardService.getCard(card3.id);

    // assert
    expect(result).toEqual(card3);
    expect(storageService.get).toHaveBeenCalledWith(cardsStorageKey);
  });

  xit('updateCard method updates card', () => {
    // arrange
    storageService.save(cardsStorageKey, [card1]);
    card1.lastName = 'Doll';
    card1.job = 'ATQC';

    // act
    cardService.updateCard(card1);
    const result = cardService.getCard(card1.id);

    // assert
    expect(result).toEqual(updatedCard);
  });

  it('delete method change cards by eliminating specific card', () => {
    // arrange
    spyOn(storageService, 'save');

    // act
    cardService.deleteCard(card1.id);

    // assert
    expect(storageService.save).toHaveBeenCalledWith(cardsStorageKey, []);
  });

  it('removeAll method removes all cards', () => {
    // arrange
    spyOn(storageService, 'delete');

    // act
    cardService.removeAllCards();

    // assert
    expect(storageService.delete).toHaveBeenCalledWith(cardsStorageKey);
  });

  xit('getSpecificNumberOfRandomCards method return several numbers of cards', () => {
    // arrange
    spyOn(randomDataService, 'getRandomNumber').and.returnValue(3);

    // act
    const cards = cardService.getSpecificNumberOfRandomCards([card1, card2, card3], 1);

    // assert
    expect(cards).toEqual([card1]);
  });
});
