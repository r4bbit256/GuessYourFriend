import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRandomDataGeneratorService } from './test-random-data-generator.service';
import { RandomDataGeneratorService } from './random-data-generator.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [TestRandomDataGeneratorService, {provide: RandomDataGeneratorService, useExisting: TestRandomDataGeneratorService}]
})
export class TestRandomDataGeneratorModule { }
