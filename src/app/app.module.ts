import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { ResultsComponent } from './game/results/results.component';
import { AddCardComponent } from './add-card/add-card.component';
import { CardListComponent } from './card-list/card-list.component';
import { ScoreComponent } from './score/score.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './card-list/details/details.component';

const AngularMaterialModule = [
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatRadioModule,
  MatIconModule,
  MatListModule
];

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ResultsComponent,
    AddCardComponent,
    CardListComponent,
    ScoreComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
