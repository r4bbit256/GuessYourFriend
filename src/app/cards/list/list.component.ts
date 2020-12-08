import { Component, OnInit } from '@angular/core';

import { BehaviorSubject, forkJoin } from 'rxjs';

import { RandomDataGeneratorService } from '../../services/random-data-generator/random-data-generator.service';
import { CardService } from '../../services/card/cards.service';

import { Card } from '../../models/card';
import { RandomUserDataGenerator } from 'src/app/models/randomuser-data-generator';
import { Job } from 'src/app/models/job';
import { UserInterfaceResources } from '../../shared/utilities/user-interface.resources';

@Component({
  selector: 'app-card-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  cards$ = new BehaviorSubject(this.cardService.getAll());
  allCards: Card[];
  cardsToGenerateLabel = UserInterfaceResources.CardsToGenerateLabel;
  generateLabel = UserInterfaceResources.GenerateLabel;

  constructor(private cardService: CardService,
              private randomDataService: RandomDataGeneratorService) { }

  ngOnInit(): void {
    this.cards$.subscribe(cards => {
      this.allCards = cards;
    });
  }

  generateCards(numberToGenerate: string): void {
    forkJoin({jobList: this.randomDataService.getRandomJobList(), users: this.randomDataService.getRandomUsers(numberToGenerate)})
      .subscribe(item => {
        const cards = this.mapData(item.users, item.jobList);
        this.cardService.addCards(cards);
        this.cards$.next(this.cardService.getAll());
      });
  }

  cardsUpdate(filteredCards: Card[]): void {
    this.cards$.next(filteredCards);
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
