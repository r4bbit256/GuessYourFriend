import { Component, OnInit } from '@angular/core';

import { RandomDataGeneratorService } from '../../services/random-data-generator/random-data-generator.service';
import { CardService } from '../../services/card/cards.service';

import { Card } from '../../models/card';
import { RandomUserDataGenerator } from 'src/app/models/randomuser-data-generator';
import { Job } from 'src/app/models/job';

import { UserInterfaceResources } from '../../shared/utilities/user-interface.resources';
import { concat, of } from 'rxjs';

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
    const jobs = [];

    this.randomDataService.getRandomJobList().subscribe(jobList => {
      jobList.forEach(job => {
        jobs.push(job);
      });
    });

    this.randomDataService.getRandomUsers(numberToGenerate).subscribe(data => {
      this.mapData(data, jobs);
    });
  }

  private mapData(randomUsers: RandomUserDataGenerator, jobs: Job[]): void {
    randomUsers.results.forEach(item => {
      const card = new Card();
      card.id = item.login.uuid;
      card.firstName = item.name.first;
      card.lastName = item.name.last;
      card.photo = item.picture.large;
      card.gender = item.gender;

      of(this.randomDataService.getRandomItemFromArray(jobs).subscribe(job => {
        card.job = job.job;
      })).subscribe( () => {
        this.cardService.addCard(card);
      });
    });

    this.allCards = this.cardService.getAll();
    this.filteredCards = this.allCards;
  }
}
