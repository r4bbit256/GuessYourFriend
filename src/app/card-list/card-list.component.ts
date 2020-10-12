import { Component, OnInit } from '@angular/core';

import { Card } from '../models/card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getCard();
  }

  getCard(): void {
    // TODO: use card.service to get card from the storage
  }

  deleteCard(card: Card): void {
    // TODO: use card.service to remove card from the storage
  }
}
