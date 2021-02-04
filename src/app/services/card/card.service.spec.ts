import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CardService } from './card.service';
import { StorageService } from '../storage/storage.service';
import { TestRandomDataGeneratorModule } from '../random-data-generator/test-random-data-generator.module';

import { Card } from '../../models/card';

fdescribe('CardsService', () => {
  let cardService: CardService;
  const cardsStorageKey = 'cards';
  const storageService = new StorageService();
  const card1: Card = {
    id: '1',
    firstName: 'John',
    lastName: 'Dow',
    gender: 'male',
    photo: '',
    job: 'Dev',
  };
  const card2: Card = {
    id: '2',
    firstName: 'Jack',
    lastName: 'Black',
    gender: 'male',
    photo: '',
    job: 'QA',
  };
  const updatedCard: Card = {
    id: '1',
    firstName: 'John',
    lastName: 'Doll',
    gender: 'male',
    photo: '',
    job: 'ATQC',
  };

  beforeEach(() => {
    spyOn(storageService, 'get').and.returnValue([card1]);
    spyOn(storageService, 'save');
    spyOn(storageService, 'delete');

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, TestRandomDataGeneratorModule],
      providers: [CardService, { provide: StorageService, useValue: storageService }],
    });
    cardService = TestBed.inject(CardService);
    storageService.clear();
  });

  afterEach(() => {
    storageService.clear();
  });

  it('CardService should be created', () => {
    expect(cardService).toBeTruthy();
  });

  it('#addCard saves new card', () => {
    cardService.addCard(card2);
    expect(storageService.save).toHaveBeenCalledWith(cardsStorageKey, [card1, card2]);
  });

  it('#addCards saves array of cards', () => {
    cardService.addCards([card1, card2]);
    expect(storageService.save).toHaveBeenCalledWith(cardsStorageKey, [card1, card2]);
  });

  it('#getCard return value by key', () => {
    const result = cardService.getCard(card1.id);
    expect(result).toEqual(card1);
    expect(storageService.get).toHaveBeenCalledWith(cardsStorageKey);
  });

  it('#updateCard updates card', () => {
    card1.lastName = 'Doll';
    card1.job = 'ATQC';
    cardService.updateCard(card1);
    const result = cardService.getCard(card1.id);
    expect(result).toEqual(updatedCard);
  });

  it('#delete change cards by eliminating specific card', () => {
    cardService.deleteCard(card1.id);
    expect(storageService.save).toHaveBeenCalledWith(cardsStorageKey, []);
  });

  it('#removeAll removes all cards', () => {
    cardService.removeAllCards();
    expect(storageService.delete).toHaveBeenCalledWith(cardsStorageKey);
  });

  it('#getSpecificNumberOfRandomCards gets array of cards and returns specific number of random cards', () => {
    const cards = cardService.getSpecificNumberOfRandomCards([card1, card2, updatedCard], 0);
    expect(cards).toEqual([]);
  });

  it('#getSpecificNumberOfRandomCards no cards. return empty cards array', () => {
    const cards = cardService.getSpecificNumberOfRandomCards([]);
    expect(cards).toEqual([]);
  });

  it('#getRandomCard gets array of cards and returns random card from this array', () => {
    const randomCard = cardService.getRandomCard();
    expect(randomCard).toEqual(card1);
  });
});
