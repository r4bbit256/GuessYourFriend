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

  private submittedGamesNumber = 0;

  constructor(private cardService: CardService,
              private randomDataService: RandomDataGeneratorService) {}

  ngOnInit(): void {
    this.setCards();
  }

  startGame(numberOfGames: number): void {
    this.isGamePlayVisible = true;
    this.submittedGamesNumber = numberOfGames;
  }

  verifyAnswer(card: Card): void {
    if (this.correctAnswers < this.submittedGamesNumber) {
      if (this.randomCard.id === card.id) {
        this.correctAnswers++;
        this.setCards();
      } else {
        this.incorrectAnswers++;
      }
    } else {
      this.resetGame();
    }
  }

  private setCards(): void {
    const allCards = this.cardService.getAll();
    this.cards = allCards;
    let randomNumber: number;

    if (allCards.length > 0) {
      do {
        randomNumber = this.randomDataService.getRandomNumber(allCards.length);
      }
      while (randomNumber + 4 > allCards.length);

      this.cards = allCards.slice(randomNumber, randomNumber + 4);
      this.randomCard = this.randomDataService.getRandomItemFromArray<Card>(this.cards);
    }
  }

  private resetGame(): void {
    this.correctAnswers = 0;
    this.incorrectAnswers = 0;
    this.isGamePlayVisible = false;
  }
}
