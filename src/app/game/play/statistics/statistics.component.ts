import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  @Input() correctAnswers = 0;
  @Input() incorrectAnswers = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
