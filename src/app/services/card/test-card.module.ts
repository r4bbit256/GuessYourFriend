import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

const AngularMaterialModules = [MatToolbarModule, MatButtonModule, MatMenuModule];

@NgModule({
  declarations: [],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, AngularMaterialModules],
  providers: [],
})
export class TestCardModule {}
