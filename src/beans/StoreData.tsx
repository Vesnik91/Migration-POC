import { Card } from './Card'

export class StoreData {

  cards: Card[];

  constructor(data?: StoreData) {
    if (data) {
      this.cards = data.cards;
    }
  }
}

export const initialCardsData: Card[] = [
    new Card({
      id: 0,
      name: 'Dad\'s Car Expenses',
      cash: 2000,
      priority: 0
    }),
    new Card({
      id: 1,
      name: 'Mom\'s Car Expenses',
      cash: 1500,
      priority: 1
    }),
    new Card({
      id: 2,
      name: 'Home Expenses',
      cash: 5000,
      priority: 2
    }),
    new Card({
      id: 3,
      name: 'Living Expenses',
      cash: 3500,
      priority: 3
    }),
    new Card({
      id: 4,
      name: 'First kid Expenses',
      cash: 400,
      priority: 4
    }),
    new Card({
      id: 5,
      name: 'Second kid Expenses',
      cash: 600,
      priority: 5
    }),
    new Card({
      id: 6,
      name: 'Vacation Expenses',
      cash: 1000,
      priority: 6
    }),
    new Card({
      id: 7,
      name: 'College Expenses',
      cash: 600,
      priority: 7
    }),
    new Card({
      id: 8,
      name: 'Third kid Expenses',
      cash: 1000,
      priority: 8
    })
];
