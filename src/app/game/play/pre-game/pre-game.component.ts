import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pre-game',
  templateUrl: './pre-game.component.html',
  styleUrls: ['./pre-game.component.scss']
})
export class PreGameComponent implements OnInit {
  @Output() startGame = new EventEmitter<number>();

  numberOfGames = 1;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  start(): void {
    if (this.numberOfGames > 0 && this.numberOfGames <= 10) {
      this.startGame.emit(this.numberOfGames);
    } else {
      this.snackBar.open('Number of games should be greater than 0 but less than 11', null, {
        duration: 5000,
      });
    }
  }
}
