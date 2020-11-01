import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pre-game',
  templateUrl: './pre-game.component.html',
  styleUrls: ['./pre-game.component.scss']
})
export class PreGameComponent implements OnInit {
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
