import { Component, Input } from '@angular/core';

import { Card } from '../../../../models/card';

@Component({
  selector: 'app-answer-button',
  templateUrl: './answer-button.component.html',
  styleUrls: ['./answer-button.component.scss'],
})
export class AnswerButtonComponent {
  @Input() isCorrectAnswer: boolean;
  @Input() card: Card;
  @Input() isClickedButton: boolean;

  constructor() {}
}
