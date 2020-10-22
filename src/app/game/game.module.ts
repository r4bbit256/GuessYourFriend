import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { ResultsComponent } from './results/results.component';
import { ScoreComponent } from './score/score.component';

@NgModule({
  declarations: [
    GameComponent,
    ResultsComponent,
    ScoreComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ],
  exports: []
})
export class GameModule { }
