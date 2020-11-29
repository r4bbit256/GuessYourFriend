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
    this.setCardsForGame();
  }

  onAnswer(isCorrect: boolean): void {
    if (isCorrect) {
      this.correctAnswers++;
    } else {
      this.incorrectAnswers++;
    }

    setTimeout(() => {
      if (this.isGameNotFinished()) {
        this.setCardsForGame();
      } else {
        this.resetGame();
      }
    }, 3000);
  }

  private setCardsForGame(): void {
    const allCards = this.cardService.getAll();

    if (allCards.length) {
      this.cards = this.cardService.getSpecificNumberOfRandomCards(allCards);
      this.cardService.getRandomCard(this.cards).subscribe(card => {
        this.randomCard = card;
      });
    } else {
      this.cards = [];
    }
  }

  private isGameNotFinished(): boolean {
    return this.correctAnswers + this.incorrectAnswers < this.submittedGamesNumber;
  }

  private resetGame(): void {
    this.correctAnswers = 0;
    this.incorrectAnswers = 0;
    this.isGamePlayVisible = false;
  }
}
