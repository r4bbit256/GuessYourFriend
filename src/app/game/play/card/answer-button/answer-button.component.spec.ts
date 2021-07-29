import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card } from 'src/app/models/card';
import { AnswerButtonComponent } from './answer-button.component';

describe('AnswerButtonComponent', () => {
  let component: AnswerButtonComponent;
  let fixture: ComponentFixture<AnswerButtonComponent>;
  const card: Card = { id: '1', firstName: 'Test', lastName: 'User', job: 'QA', gender: 'male', photo: 'photo.jpg' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnswerButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerButtonComponent);
    component = fixture.componentInstance;
    component.card = card;
    component.isClickedButton = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
