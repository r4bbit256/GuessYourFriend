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
  randomCard: Card;
  correctAnswers = 0;
  incorrectAnswers = 0;
  isGamePlayVisible = false;

  private numberOfGames: number;

  constructor(private cardService: CardService,
              private randomDataService: RandomDataGeneratorService) {}

  ngOnInit(): void {
    this.cards = this.cardService.getAll().slice(0, 4);
    this.randomCard = this.randomDataService.getRandomItemFromArray<Card>(this.cards);
  }

  startGame(numberOfGames: number): void {
    this.isGamePlayVisible = true;
    this.numberOfGames = numberOfGames;
  }

  verifyAnswer(card: Card): void {
    for (let i = 1; i <= this.numberOfGames; i++) {
      if (this.randomCard.id !== card.id) {
        this.incorrectAnswers++;
      } else {
        this.cards = this.cardService.getAll().slice(0, 4);
        this.randomCard = this.randomDataService.getRandomItemFromArray<Card>(this.cards);
        this.correctAnswers++;
      }
      break;
    }
  }
}
