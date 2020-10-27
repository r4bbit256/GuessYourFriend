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
  randomCard: Card;
  correctAnswers = 0;
  incorrectAnswers = 0;
  isGamePlayVisible = false;

  private submittedGamesNumber = 0;

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.setCardsForGame();
  }

  startGame(numberOfGames: number): void {
    this.isGamePlayVisible = true;
    this.submittedGamesNumber = numberOfGames;
  }

  checkAnswer(card: Card): void {
    if (this.isGameNotFinished()) {
      if (this.randomCard.id === card.id) {
        this.correctAnswers++;
        this.setCardsForGame();
      } else {
        this.incorrectAnswers++;
      }
    } else {
      this.resetGame();
    }
  }

  private setCardsForGame(): void {
    this.cards = this.cardService.getSpecificNumberOfRandomCards();
    this.randomCard = this.cardService.getRandomCard(this.cards);
  }

  private isGameNotFinished(): boolean {
    return (this.correctAnswers + 1) < this.submittedGamesNumber;
  }

  private resetGame(): void {
    this.correctAnswers = 0;
    this.incorrectAnswers = 0;
    this.isGamePlayVisible = false;
    this.setCardsForGame();
  }
}
