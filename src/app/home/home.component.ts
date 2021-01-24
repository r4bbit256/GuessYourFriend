import { Component, OnInit } from '@angular/core';

import { AdItem } from './../ad-banner/ad-item';
import { AdService } from './../ad-banner/ad.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ads: AdItem[];

  constructor(private adService: AdService) { }

  ngOnInit(): void {
    this.ads = this.adService.getAds();
  }
}
