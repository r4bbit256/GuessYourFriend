import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { ResultsComponent } from './game/results/results.component';
import { HomeComponent } from './home/home.component';
import { CardsModule } from './cards/cards.module';

const AngularMaterialModules = [
  MatToolbarModule
];

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ResultsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CardsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
