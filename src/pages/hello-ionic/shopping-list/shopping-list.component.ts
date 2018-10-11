import {Component, Input} from '@angular/core';
import {ListItem} from '../../../app/ListItem';
import {ItemDetailsPage} from '../../item-details/item-details';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'shopping-list',
  templateUrl: 'shopping-list.html'
})
export class ShoppingListComponent {
  @Input() items: Array<ListItem>;
  constructor(public navCtrl: NavController) {}

  removeFromList(item: ListItem): void {
    if (item.done) {
      this.items.splice(this.items.findIndex(it => it.id === item.id), 1);
    } else {
      alert('No puedes borrar un item no completado');
    }
  }

  viewDetail(item: ListItem): void {
    this.navCtrl.push(ItemDetailsPage, { item });
  }
}
