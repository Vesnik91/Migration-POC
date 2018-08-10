export class Card {

  id: number;
  name: string;
  cash: number;
  priority: number;

  constructor(data?: Card) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.cash = data.cash;
      this.priority = data.priority;
    }
  }
}
