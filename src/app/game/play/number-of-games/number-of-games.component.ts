import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-number-of-games',
  templateUrl: './number-of-games.component.html',
  styleUrls: ['./number-of-games.component.scss']
})
export class NumberOfGamesComponent implements OnInit {
  @Output() startGame = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  start(numberOfGames: number): void {
    if (numberOfGames > 0 || numberOfGames <= 10) {
      this.startGame.emit(numberOfGames);
    }
  }
}
