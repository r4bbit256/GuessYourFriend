import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Card } from 'src/app/models/card';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  const cards: Array<Card> = [{ id: '1', firstName: 'Test', lastName: 'User', job: 'QA', gender: 'male', photo: 'photo.jpg' }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.cards = cards;
    component.randomCard = cards[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
