import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { CardListComponent } from './card-list/card-list.component';
import { ScoreComponent } from './score/score.component';
import { ResultsComponent } from './game/results/results.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'game', component: GameComponent,
    children: [ { path: 'results', component: ResultsComponent }, ] },
  { path: 'card-list', component: CardListComponent },
  { path: 'score', component: ScoreComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
