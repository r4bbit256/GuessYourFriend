import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { StorageService } from '../storage/storage.service';
import { Card } from '../../models/card';
import { RandomDataGeneratorService } from '../random-data-generator/random-data-generator.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private cardsStorageKey = 'cards';
  private cards = this.storageService.get<Card[]>(this.cardsStorageKey) || [];

  constructor(private storageService: StorageService,
              private randomDataService: RandomDataGeneratorService) { }

  getCard(key: string): string {
    return this.cards[key];
  }

  getAll(): Card[] {
    return this.cards;
  }

  addCard(card: Card): void {
    this.cards.push({
      id: uuid(),
      ...card,
    });
    this.storageService.save(this.cardsStorageKey, this.cards);
  }

  deleteCard(key: string): void {
    this.cards = this.cards.filter(s => s.id !== key);
    this.storageService.save(this.cardsStorageKey, this.cards);
  }

  getSpecificNumberOfRandomCards(cards, numberOfCards = 4): Card[] {
    if (cards.length) {
      let randomNumber = this.randomDataService.getRandomNumber(cards.length);

      while (randomNumber + numberOfCards > cards.length) {
        randomNumber = this.randomDataService.getRandomNumber(cards.length);
      }

      return cards.slice(randomNumber, randomNumber + numberOfCards);
    }

    return [];
  }

  getRandomCard(cards = this.getAll()): Card {
    return this.randomDataService.getRandomItemFromArray<Card>(cards);
  }
}
