import { Component, OnInit } from '@angular/core';

import { Card } from '../../models/card';
import { CardService } from '../../services/card/cards.service';
import { RandomDataGeneratorService } from './../../services/random-data-generator/random-data-generator.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})
export class PlayComponent implements OnInit {
  cards: Card[];
  card: Card;
  correctAnswers = 0;
  incorrectAnswers = 0;

  constructor(private cardService: CardService,
              private randomDataService: RandomDataGeneratorService) {}

  ngOnInit(): void {
    this.cards = this.cardService.getAll().slice(0, 4);
    this.card = this.randomDataService.getRandomItemFromArray<Card>(this.cards);
  }

  verifyAnswer(card: Card): boolean {
    if (this.card.id === card.id) {
      this.cards = this.cardService.getAll().slice(0, 4);
      this.card = this.randomDataService.getRandomItemFromArray<Card>(this.cards);
      this.correctAnswers++;
      return true;
    }
    this.incorrectAnswers++;
    return false;
  }
}
