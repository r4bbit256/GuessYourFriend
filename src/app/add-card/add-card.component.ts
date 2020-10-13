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
    this.getCard();
  }

  getCard(): void {
    // TODO: use card.service to get card from the storage
  }

  addCard(card: Card): void {
    this.cardService.add(card);
  }
  
  deleteCard(card: Card): void {
    // TODO: use card.service to remove card from the storage
  }
}
