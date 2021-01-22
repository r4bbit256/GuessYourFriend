import { Card } from 'src/app/models/card';

export class TestCardService {
  cards: Array<Card> = [
    { id: '1', firstName: 'Test', lastName: 'User', gender: 'male', job: 'QA', photo: 'photo.jpg'}
  ];

  getAll(): Card[] {
    return this.cards;
  }

  addCard(card: Card): void {
    this.cards.push(card);
  }

  addCards(cards: Card[]): void {
    this.cards = cards;
  }
}
