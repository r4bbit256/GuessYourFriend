import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/auth.guard';

import { GameComponent } from './game.component';
import { ResultsComponent } from './play/results/results.component';
import { ScoreComponent } from './score/score.component';
import { PlayComponent } from './play/play.component';

const routes: Routes = [
  { path: 'game', component: GameComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'play', component: PlayComponent },
          { path: 'results', component: ResultsComponent },
          { path: 'score', component: ScoreComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
