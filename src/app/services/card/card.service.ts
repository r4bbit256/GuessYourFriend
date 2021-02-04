import { Injectable } from '@angular/core';

import { StorageService } from '../storage/storage.service';
import { Card } from '../../models/card';
import { RandomDataGeneratorService } from '../random-data-generator/random-data-generator.service';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  cardsStorageKey = 'cards';
  cards = this.storageService.get<Card[]>(this.cardsStorageKey) || Array<Card>();

  constructor(private storageService: StorageService, private randomDataService: RandomDataGeneratorService) {}

  getCard(key: string): Card {
    return this.cards.find((s) => s.id === key);
  }

  getAll(): Card[] {
    return this.cards;
  }

  addCard(card: Card): void {
    this.cards.push(card);
    this.storageService.save(this.cardsStorageKey, this.cards);
  }

  addCards(cards: Card[]): void {
    this.cards = cards;
    this.storageService.save(this.cardsStorageKey, this.cards);
  }

  updateCard(card: Card): void {
    const cardIndex = this.cards.findIndex((s) => s.id === card.id);
    this.cards[cardIndex] = card;
    this.storageService.save(this.cardsStorageKey, this.cards);
  }

  deleteCard(key: string): void {
    this.cards = this.cards.filter((s) => s.id !== key);
    this.storageService.save(this.cardsStorageKey, this.cards);
  }

  removeAllCards(): void {
    this.storageService.delete(this.cardsStorageKey);
  }

  getSpecificNumberOfRandomCards(cards = this.getAll(), numberOfCards = 4): Card[] {
    if (!cards.length) {
      return [];
    }

    let randomNumber = 0;

    do {
      randomNumber = this.randomDataService.getRandomNumber(cards.length);
    } while (randomNumber + numberOfCards > cards.length);

    return cards.slice(randomNumber, randomNumber + numberOfCards);
  }

  getRandomCard(cards = this.getAll()): Card {
    return this.randomDataService.getRandomItemFromArray(cards);
  }
}
