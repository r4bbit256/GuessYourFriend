import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Card } from '../models/card';
import { CardService } from '../services/card/cards.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {
  newCard = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    gender: ['', Validators.required],
  });

  constructor(private cardService: CardService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const card = new Card();
    // TODO: set card
    this.addCard(card);
  }

  addCard(card: Card): void {
    this.cardService.addCard(card);
  }
}
