import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-number-of-games',
  templateUrl: './number-of-games.component.html',
  styleUrls: ['./number-of-games.component.scss']
})
export class NumberOfGamesComponent implements OnInit {
  @Output() startGame = new EventEmitter<number>();

  numberOfGames = 0;

  constructor() { }

  ngOnInit(): void {
  }

  start(): void {
    if (this.numberOfGames > 0 || this.numberOfGames <= 10) {
      this.startGame.emit(this.numberOfGames);
    }
  }
}
