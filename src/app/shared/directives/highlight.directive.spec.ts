import { ElementRef } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    // arrange
    let el = new ElementRef(null);

    // act
    const directive = new HighlightDirective(el);

    // assert
    expect(directive).toBeTruthy();
  });
});
