import { Component, Input, OnInit, ViewChild, OnDestroy, ComponentFactoryResolver } from '@angular/core';

import { AdDirective } from '../../directives/ad.directive';
import { BannerItem } from '../../../models/banner-item';
import { Banner } from '../../../models/banner';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss'],
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: BannerItem[];
  currentAdIndex = -1;
  @ViewChild(AdDirective, { static: true }) appAd: AdDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  loadComponent(): void {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.appAd.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<Banner>(componentFactory);
    componentRef.instance.data = adItem.data;
  }

  getAds(): void {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
