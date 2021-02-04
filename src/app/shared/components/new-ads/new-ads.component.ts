import { Component, Input } from '@angular/core';

import { Banner } from '../../../models/banner';

@Component({
  selector: 'app-new-ads',
  templateUrl: './new-ads.component.html',
  styleUrls: ['./new-ads.component.scss'],
})
export class NewAdsComponent implements Banner {
  @Input() data: any;

  constructor() {}
}
