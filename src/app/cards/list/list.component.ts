import { Component, OnInit } from '@angular/core';

import { CardService } from '../../services/card/cards.service';
import { Card } from '../../models/card';

@Component({
  selector: 'app-card-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  filteredCards: Card[];
  allCards: Card[];
  searchText = '';

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.allCards = this.cardService.getAll();
    this.filteredCards = this.allCards;
  }

  deleteCard(key: string): void {
    this.allCards = this.allCards.filter((card) => {
      return card.id !== key;
    });
    this.search();
    this.cardService.deleteCard(key);
  }

  search(): void {
    this.filteredCards = this.allCards.filter(card => card.firstName.includes(this.searchText)
      || card.lastName.includes(this.searchText));
  }
}
