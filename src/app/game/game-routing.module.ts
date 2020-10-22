import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameComponent } from './game.component';
import { ResultsComponent } from './results/results.component';
import { ScoreComponent } from './score/score.component';
import { PlayComponent } from './play/play.component';

const routes: Routes = [
  { path: 'game', component: GameComponent,
    children: [
      { path: 'play', component: PlayComponent },
      { path: 'results', component: ResultsComponent },
      { path: 'score', component: ScoreComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
