import { Component } from '@angular/core';
import {List} from '../../app/List';
import {ListItem} from '../../app/ListItem';
import {NavController} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  items: List = new List(
    this.newItemModel('Carne', 1.5),
    this.newItemModel('Pollo', 1, 2),
    this.newItemModel('Pescado', 0.5, 3)
  );

  constructor(public navCtrl: NavController) {}

  addNewItem(value: string, price: number, quantity: number): void {
    if (value && price && quantity) {
      this.items.add(this.newItemModel(value, price, quantity));
    }
  }

  viewDetail(item: ListItem): void {
    this.navCtrl.push(ItemDetailsPage, { item });
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
