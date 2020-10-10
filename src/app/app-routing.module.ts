import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameComponent } from './game/game.component';
import { CardListComponent } from './card-list/card-list.component';
import { ScoreComponent } from './score/score.component';
import { ResultsComponent } from './game/results/results.component';
import { HomeComponent } from './home/home.component';
import { AddCardComponent } from './add-card/add-card.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'game', component: GameComponent,
    children: [ { path: 'results', component: ResultsComponent }, ] },
  { path: 'add-card', component: AddCardComponent },
  { path: 'card-list', component: CardListComponent },
  { path: 'score', component: ScoreComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
