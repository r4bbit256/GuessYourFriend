import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

import { Card } from 'src/app/models/card';
import { UserInterfaceResources } from 'src/app/shared/utilities/user-interface.resources';

@Component({
  selector: 'app-filtered',
  templateUrl: './filtered.component.html',
  styleUrls: ['./filtered.component.scss']
})
export class FilteredComponent implements OnChanges {
  @Output() cardsUpdate: EventEmitter<Card[]> = new EventEmitter();
  @Input() cards: Card[];

  filteredCards: Card[];
  searchText = '';
  filterLabel = UserInterfaceResources.FilterLabel;
  clearLabel = UserInterfaceResources.ClearLabel;
  removeAllLabel = UserInterfaceResources.RemoveAllLabel;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cards) {
      this.filteredCards = this.cards;
    }
  }

  searchTextUpdate(): void {
    this.filteredCards = this.cards.filter(
      card => card.firstName.includes(this.searchText) || card.lastName.includes(this.searchText));
  }

  clearFilter(): void {
    this.searchText = '';
  }

  removeAll(): void {
    this.cardsUpdate.emit([]);
  }

  deleteCard(key: string): void {
    this.cardsUpdate.emit(this.cards.filter(card => card.id !== key));
  }
}
