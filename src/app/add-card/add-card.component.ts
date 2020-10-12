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

  addCard(card: Card): void {
    // TODO: use card.service to add card to the storage
  }
}
