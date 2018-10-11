import { Component } from '@angular/core';
import { ListItem } from '../../app/ListItem';
import {List} from '../../app/List';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  items: List = new List(
    this.newItemModel('Carne', 1.5),
    this.newItemModel('Pollo', 1),
    this.newItemModel('Pescado', 0.5)
  );

  constructor() {}

  /** Getters **/

  /** Class Methods **/
  addNewItem(value: string, price: number, quantity: number): void {
    if (value && price && quantity) {
      this.items.add(this.newItemModel(value, price, quantity));
    }
  }

  /** Private methods **/
  private newItemModel(description: string, price: number = 0, quantity: number = 1): ListItem {
    return {
      id: this.randomNumber(),
      done: false,
      description,
      price,
      quantity
    }
  }

  private randomNumber(): number {
    return Math.floor((Math.random() * 1000) + 1);
  }

}
