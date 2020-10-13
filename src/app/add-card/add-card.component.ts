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

  getCard(key: string): Card {
    return JSON.parse(this.cardService.getCard(key));
  }

  addCard(card: Card): void {
    this.cardService.addCard(card);
  }

  deleteCard(key: string): void {
    this.cardService.deleteCard(key);
  }
}
