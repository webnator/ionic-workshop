import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';
import { ListItem } from '../../app/ListItem';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  item: ListItem;

  constructor(public navParams: NavParams) {
    this.item = navParams.get('item');
  }
}
