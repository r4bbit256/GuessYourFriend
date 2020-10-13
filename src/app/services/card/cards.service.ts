import { Injectable } from '@angular/core';

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

  addCard(card: Card): void {
    this.storageService.save(card.id, card);
  }

  deleteCard(key: string): void {
    this.storageService.delete(key);
  }
}
