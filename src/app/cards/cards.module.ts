import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { CardsComponent } from './cards.component';
import { CardsRoutingModule } from './cards-routing.module';

import { HighlightDirective } from '../shared/directives/highlight.directive';
import { FilteredComponent } from './list/filtered/filtered.component';

const AngularMaterialModule = [
  MatButtonModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatRadioModule,
  MatIconModule,
  MatListModule,
];

@NgModule({
  declarations: [
    CardsComponent,
    DetailsComponent,
    ListComponent,
    AddComponent,
    HighlightDirective,
    FilteredComponent,
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [HighlightDirective],
})
export class CardsModule {}
