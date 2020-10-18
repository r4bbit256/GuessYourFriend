import { Component, OnInit } from '@angular/core';

import { CardService } from '../services/card/cards.service';
import { Card } from '../models/card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  cards: Card[];
  allCards: Card[];
  searchText: string;

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.allCards = this.cardService.getAll();
    this.cards = this.allCards;
  }

  deleteCard(key: string): void {
    this.cardService.deleteCard(key);
  }

  search(): Card[] {
    if (!this.cards) {
      return [];
    }
    if (!this.searchText) {
      return this.cards = this.allCards;
    }

    this.searchText = this.searchText.toLocaleLowerCase();

    return this.cards = this.allCards.filter(card => card.firstName.toLocaleLowerCase().includes(this.searchText)
      || card.lastName.toLocaleLowerCase().includes(this.searchText));
  }
}
