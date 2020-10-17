import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { CardService } from '../services/card/cards.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {
  ava = '';
  newCard = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    gender: ['male', Validators.required],
  });

  constructor(private cardService: CardService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ava = 'assets/avatars/avatar_man.png';
  }

  addCard(): void {
    this.cardService.addCard(this.newCard.value);
    this.newCard.reset();
  }

  genderChagned(event: any): void {
    event.value === 'male'
    ? this.ava = 'assets/avatars/avatar_man.png'
    : this.ava = 'assets/avatars/avatar_woman.png';
  }
}
