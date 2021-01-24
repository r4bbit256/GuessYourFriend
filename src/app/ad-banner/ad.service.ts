import { Injectable } from '@angular/core';

import { NewAdsComponent } from './../new-ads/new-ads.component';
import { AdItem } from './ad-item';

@Injectable({providedIn: 'root'})
export class AdService {
  getAds(): AdItem[] {
    return [
      new AdItem(NewAdsComponent, {title: 'Title1', message: 'lorem ipsum'}),

      new AdItem(NewAdsComponent, {title: 'Title2', message: 'lotrem ipsum'})
    ];
  }
}
