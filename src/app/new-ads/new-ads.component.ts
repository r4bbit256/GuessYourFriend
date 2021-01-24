import { AdComponent } from './../ad-banner/ad.banner';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-ads',
  templateUrl: './new-ads.component.html',
  styleUrls: ['./new-ads.component.scss']
})
export class NewAdsComponent implements AdComponent {
  @Input() data: any;

  constructor() { }
}
