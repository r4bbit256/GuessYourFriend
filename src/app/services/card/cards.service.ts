import { Injectable } from '@angular/core';

import { v4 as uuidv4 } from 'uuid';

import { StorageService } from '../storage/storage.service';
import { Card } from '../../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private storageService: StorageService) { }

  getCard(key: string): string {
    return this.storageService.get(key);
  }

  getAll(): Card[] {
    const cards: Card[] = [];
    const response = this.storageService.getAll();

    response.forEach(object => {
      cards.push(JSON.parse(object) as Card);
    });

    return cards;
  }

  addCard(card: Card): void {
    card.id.length === 0
      ? card.id = uuidv4()
      : this.storageService.save(card.id, card);
  }

  deleteCard(key: string): void {
    this.storageService.delete(key);
  }
}
