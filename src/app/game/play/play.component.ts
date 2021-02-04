import { Component, OnInit } from '@angular/core';

import { Card } from '../../models/card';
import { CardService } from '../../services/card/card.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})
export class PlayComponent implements OnInit {
  level$ = new BehaviorSubject(this.cardService.getSpecificNumberOfRandomCards());
  cards: Card[];
  randomCard: Card;
  correctAnswers = 0;
  incorrectAnswers = 0;
  isGamePlayVisible = false;

  private submittedGamesNumber = 0;

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.level$.subscribe((cards) => {
      this.cards = cards;
      this.randomCard = this.cardService.getRandomCard(cards);
    });
  }

  startGame(numberOfGames: number): void {
    this.isGamePlayVisible = true;
    this.submittedGamesNumber = numberOfGames;
  }

  onAnswer(isCorrect: boolean): void {
    if (isCorrect) {
      this.correctAnswers++;
    } else {
      this.incorrectAnswers++;
    }

    setTimeout(() => {
      if (this.isGameNotFinished()) {
        this.level$.next(this.cardService.getSpecificNumberOfRandomCards());
      } else {
        this.resetGame();
      }
    }, 3000);
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
