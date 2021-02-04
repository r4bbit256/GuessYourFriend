import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';
import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { ResultsComponent } from './play/results/results.component';
import { ScoreComponent } from './score/score.component';
import { PlayComponent } from './play/play.component';
import { StatisticsComponent } from './play/statistics/statistics.component';
import { PreGameComponent } from './play/pre-game/pre-game.component';
import { CardComponent } from './play/card/card.component';
import { AnswerButtonComponent } from './play/card/answer-button/answer-button.component';

@NgModule({
  declarations: [
    GameComponent,
    ResultsComponent,
    ScoreComponent,
    PlayComponent,
    StatisticsComponent,
    PreGameComponent,
    CardComponent,
    AnswerButtonComponent,
  ],
  imports: [GameRoutingModule, FormsModule, SharedModule],
})
export class GameModule {}
