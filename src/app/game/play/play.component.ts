import { Component, OnInit } from '@angular/core';

import { Card } from '../../models/card';
import { CardService } from '../../services/card/cards.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})
export class PlayComponent implements OnInit {
  cards: Card[];
  card: Card;

  constructor(private cardService: CardService) {
  }

  ngOnInit(): void {
    this.cards = this.cardService.getAll().slice(0, 4);
    this.card = this.getRandomItemFromArray(this.cards);
  }

  getRandomItemFromArray(array): any {
    return array[Math.floor(Math.random() * array.length)];
  }

  verifyAnswer(card: Card): boolean {
    return this.card.id === card.id;
  }
}
