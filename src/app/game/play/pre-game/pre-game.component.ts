import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { UserInterfaceResources } from '../../../utilities/user-interface.resources';

@Component({
  selector: 'app-pre-game',
  templateUrl: './pre-game.component.html',
  styleUrls: ['./pre-game.component.scss']
})
export class PreGameComponent implements OnInit {
  @Output() startGame = new EventEmitter<number>();

  numberOfGames = 1;
  numberOfGamesLabel = UserInterfaceResources.NumberOfGamesLabel;
  startGameLabel = UserInterfaceResources.StartGameLabel;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  start(): void {
    if (this.numberOfGames > 0 && this.numberOfGames <= 10) {
      this.startGame.emit(this.numberOfGames);
    } else {
      this.numberOfGamesMessage();
    }
  }

  private numberOfGamesMessage() {
    this.snackBar.open(UserInterfaceResources.NumberOfGamesRuleMessage, null, {
      duration: 5000,
    });
  }
}
