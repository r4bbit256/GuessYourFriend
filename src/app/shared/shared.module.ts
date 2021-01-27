import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewAdsComponent } from './components/new-ads/new-ads.component';
import { AdBannerComponent } from './components/ad-banner/ad-banner.component';
import { AdDirective } from './directives/ad.directive';

@NgModule({
  declarations: [
    NewAdsComponent,
    AdBannerComponent,
    AdDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AdDirective,
    AdBannerComponent,
    NewAdsComponent
  ]
})
export class SharedModule { }
