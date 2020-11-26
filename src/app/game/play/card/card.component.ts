import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

import { Card } from '../../../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnChanges {
  @Output() answer: EventEmitter<boolean> = new EventEmitter();
  @Input() randomCard: Card;
  @Input() cards: Card[];

  isCorrectAnswer: boolean;
  buttonIndex: number;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cards) {
      this.isCorrectAnswer = null;
      this.buttonIndex = null;
    }
  }

  submitAnswer(i: number, isCorrect: boolean): void {
    this.buttonIndex = i;
    this.isCorrectAnswer = isCorrect;
    this.answer.emit(isCorrect);
  }
}
