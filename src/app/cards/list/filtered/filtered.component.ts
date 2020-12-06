import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  searchText = '';
  filterLabel = UserInterfaceResources.FilterLabel;
  clearLabel = UserInterfaceResources.ClearLabel;
  removeAllLabel = UserInterfaceResources.RemoveAllLabel;

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
  }

  filterCards(): void {
    const cards = this.cardService.getAll();
    this.filteredCards.emit(cards.filter(
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
