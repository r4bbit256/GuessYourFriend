import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { CardsComponent } from './cards.component';
import { CardsRoutingModule } from './cards-routing.module';
import { SharedModule } from './../shared/shared.module';
import { FilteredComponent } from './list/filtered/filtered.component';

@NgModule({
  declarations: [CardsComponent, DetailsComponent, ListComponent, AddComponent, FilteredComponent],
  imports: [CardsRoutingModule, ReactiveFormsModule, FormsModule, SharedModule],
  exports: [],
})
export class CardsModule {}
