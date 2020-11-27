import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { ResultsComponent } from './play/results/results.component';
import { ScoreComponent } from './score/score.component';
import { PlayComponent } from './play/play.component';
import { StatisticsComponent } from './play/statistics/statistics.component';
import { PreGameComponent } from './play/pre-game/pre-game.component';
import { CardComponent } from './play/card/card.component';
import { AnswerButtonComponent } from './play/card/answer-button/answer-button.component';

const AngularMaterialModule = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSnackBarModule
];

@NgModule({
  declarations: [
    GameComponent,
    ResultsComponent,
    ScoreComponent,
    PlayComponent,
    StatisticsComponent,
    PreGameComponent,
    CardComponent,
    AnswerButtonComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    AngularMaterialModule,
    FormsModule,
  ],
  exports: []
})
export class GameModule { }
