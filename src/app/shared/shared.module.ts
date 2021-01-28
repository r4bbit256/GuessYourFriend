import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';

import { NewAdsComponent } from './components/new-ads/new-ads.component';
import { AdBannerComponent } from './components/ad-banner/ad-banner.component';
import { AdDirective } from './directives/ad.directive';
import { HighlightDirective } from './directives/highlight.directive';

const AngularMaterialModule = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatListModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatRadioModule,
];

@NgModule({
  declarations: [
    NewAdsComponent,
    AdBannerComponent,
    AdDirective,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    AdBannerComponent,
    NewAdsComponent,
    HighlightDirective,
    AngularMaterialModule,
    CommonModule
  ]
})
export class SharedModule { }
