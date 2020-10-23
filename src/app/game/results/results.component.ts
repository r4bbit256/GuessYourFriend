import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  @Input() totalAnswers: number;
  @Input() correctAnswers: number;
  @Input() incorrectAnswers: number;

  constructor() { }

  ngOnInit(): void {
  }

}
