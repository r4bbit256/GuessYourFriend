import { TestBed } from '@angular/core/testing';

import { CardService } from './cards.service';

describe('CardsService', () => {
  let service: CardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
