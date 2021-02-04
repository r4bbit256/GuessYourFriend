import { Injectable } from '@angular/core';

import { NewAdsComponent } from '../components/new-ads/new-ads.component';
import { BannerItem } from '../../models/banner-item';

@Injectable({
  providedIn: 'root',
})
export class AdService {
  getAds(): BannerItem[] {
    return [
      new BannerItem(NewAdsComponent, { title: 'Title1', message: 'lorem ipsum' }),

      new BannerItem(NewAdsComponent, { title: 'Title2', message: 'lotrem ipsum' }),
    ];
  }
}
