import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { CardService } from '../../services/card/cards.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
 avatars = {
   male: 'assets/avatars/avatar_man.png',
   female: 'assets/avatars/avatar_woman.png'
 };
  defaultGender = 'male';
  newCard = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    job: ['', Validators.required],
    gender: [this.defaultGender, Validators.required],
    photo: ['']
  });

  constructor(private cardService: CardService,
              private formBuilder: FormBuilder) { }

  addCard(): void {
    this.newCard.get('photo').setValue(this.avatars[this.newCard.get('gender').value]);
    this.cardService.addCard(this.newCard.value);
    this.clear();
  }

  private clear(): void {
    this.newCard.reset();
    this.newCard.get('gender').setValue(this.defaultGender);
  }
}
