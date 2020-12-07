import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { CardService } from './../../../services/card/cards.service';

import { Card } from 'src/app/models/card';
import { UserInterfaceResources } from 'src/app/shared/utilities/user-interface.resources';

@Component({
  selector: 'app-filtered',
  templateUrl: './filtered.component.html',
  styleUrls: ['./filtered.component.scss']
})
export class FilteredComponent implements OnInit {
  @Output() filteredCards: EventEmitter<Card[]> = new EventEmitter();
  cards: Card[];
  searchText = '';
  filterLabel = UserInterfaceResources.FilterLabel;
  clearLabel = UserInterfaceResources.ClearLabel;
  removeAllLabel = UserInterfaceResources.RemoveAllLabel;

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cards = this.cardService.getAll();
  }

  filterCards(): void {
    this.filteredCards.emit(this.cards.filter(
      card => card.firstName.includes(this.searchText) || card.lastName.includes(this.searchText)));
  }

  clearFilter(): void {
    this.searchText = '';
    this.filterCards();
  }

  removeAll(): void {
    this.cardService.removeAllCards();
    this.filteredCards.emit([]);
  }
}
