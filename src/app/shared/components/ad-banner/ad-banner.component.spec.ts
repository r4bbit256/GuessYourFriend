import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerItem } from 'src/app/models/banner-item';
import { NewAdsComponent } from '../new-ads/new-ads.component';
import { AdBannerComponent } from './ad-banner.component';

describe('AdBannerComponent', () => {
  let component: AdBannerComponent;
  let fixture: ComponentFixture<AdBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdBannerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdBannerComponent);
    component = fixture.componentInstance;
    component.ads = [
      new BannerItem(NewAdsComponent, { title: 'Title1', message: 'lorem ipsum1' }),
      new BannerItem(NewAdsComponent, { title: 'Title2', message: 'lorem ipsum2' }),
    ];
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
