import { Component } from '@angular/core';
import {List} from '../../app/List';
import {ListItem} from '../../app/ListItem';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  items: List = new List();

  constructor() {}

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
