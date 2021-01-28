import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../shared/guards/auth.guard';

import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { CardsComponent } from './cards.component';

const routes: Routes = [
  { path: '', component: CardsComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'add', component: AddComponent },
          { path: 'details/:id', component: DetailsComponent },
          { path: 'list', component: ListComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }
