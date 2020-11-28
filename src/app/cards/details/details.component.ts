import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CardService } from '../../services/card/cards.service';

import { Card } from '../../models/card';
import { ApiRoutes } from '../../shared/utilities/api-routes';
import { UserInterfaceResources } from '../../shared/utilities/user-interface.resources';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  card: Card;
  editCard: FormGroup;
  editCardLabel = UserInterfaceResources.EditCardLabel;
  firstNameLabel = UserInterfaceResources.FirstNameLabel;
  lastNameLabel = UserInterfaceResources.LastNameLabel;
  jobPositionLabel = UserInterfaceResources.JobPositionLabel;
  genderLabel = UserInterfaceResources.GenderLabel;
  maleOptionLabel = UserInterfaceResources.MaleOptionLabel;
  femaleOptionLabel = UserInterfaceResources.FemaleOptionLabel;
  editLabel = UserInterfaceResources.EditLabel;

  constructor(
    private cardService: CardService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    const cardId = this.route.snapshot.paramMap.get('id');
    this.card = this.cardService.getCard(cardId);
    this.editCard = this.formBuilder.group({
      id: [this.card.id],
      firstName: [this.card.firstName, Validators.required],
      lastName: [this.card.lastName, Validators.required],
      job: [this.card.job, Validators.required],
      gender: [this.card.gender, Validators.required],
      photo: [this.card.photo],
    });
  }

  updateCard(): void {
    this.cardService.updateCard(this.editCard.value);
    this.router.navigate([`${ApiRoutes.Cards}/${ApiRoutes.CardList}`]);
  }
}
