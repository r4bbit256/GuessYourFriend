import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MockRandomDataGeneratorService } from './mock-random-data-generator.service';
import { RandomDataGeneratorService } from './random-data-generator.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [RandomDataGeneratorService, {provide: RandomDataGeneratorService, useClass: MockRandomDataGeneratorService}]
})
export class TestRandomDataGeneratorModule { }
