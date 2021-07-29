import { Card } from 'src/app/models/card';

export class TestCardService {
  cards: Array<Card> = [{ id: '1', firstName: 'Test', lastName: 'User', job: 'QA', gender: 'male', photo: 'photo.jpg' }];

  getAll(): Card[] {
    return this.cards;
  }

  addCard(card: Card): void {
    this.cards.push(card);
  }

  addCards(cards: Card[]): void {
    this.cards = cards;
  }

  getCard(key: string): Card {
    return this.cards[0];
  }
}
