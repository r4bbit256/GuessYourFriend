import { Component, OnInit } from '@angular/core';

import { RandomDataGeneratorService } from '../../services/random-data-generator/random-data-generator.service';
import { CardService } from '../../services/card/cards.service';

import { Card } from '../../models/card';
import { RandomUserDataGenerator } from 'src/app/models/randomuser-data-generator';
import { Job } from 'src/app/models/job';

import { UserInterfaceResources } from '../../shared/utilities/user-interface.resources';
import {concat, merge, of} from 'rxjs';

@Component({
  selector: 'app-card-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  filteredCards: Card[];
  allCards: Card[];
  searchText = '';
  cardsToGenerateLabel = UserInterfaceResources.CardsToGenerateLabel;
  generateLabel = UserInterfaceResources.GenerateLabel;
  filterLabel = UserInterfaceResources.FilterLabel;
  clearLabel = UserInterfaceResources.ClearLabel;

  constructor(private cardService: CardService,
              private randomDataService: RandomDataGeneratorService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.allCards = this.cardService.getAll();
    this.filteredCards = this.allCards;
  }

  deleteCard(key: string): void {
    this.allCards = this.allCards.filter((card) => {
      return card.id !== key;
    });
    this.filteredCards = this.allCards;
    this.cardService.deleteCard(key);
  }

  filterCards(): void {
    this.filteredCards = this.allCards.filter(
      card => card.firstName.includes(this.searchText) || card.lastName.includes(this.searchText));
  }

  clearFilter(): void {
    this.searchText = '';
    this.filterCards();
  }

  generateCards(numberToGenerate: string): void {
    concat(this.randomDataService.getRandomJobList(), this.randomDataService.getRandomUsers(numberToGenerate))
      .subscribe( value => {
        const cards = this.mapData(value[1], value[0]);
        this.cardService.addCard(cards);
        this.allCards = this.cardService.getAll();
        this.filteredCards = this.allCards;
      });
  }

  private mapData(randomUsers: RandomUserDataGenerator, jobs: Job[]): Card[] {
    return randomUsers.results.map(item => ({
      id: item.login.uuid,
      firstName: item.name.first,
      lastName: item.name.last,
      gender: item.gender,
      photo: item.picture.large,
      job: this.randomDataService.getRandomItemFromArray(jobs).job
    }));
  }
}
