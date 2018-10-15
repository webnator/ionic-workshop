import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  items: Array<any> = [];

  constructor() {}

  get pendingItems() {
    return this.items.filter(item => !item.done)
  }
  get doneItems() {
    return this.items.filter(item => item.done)
  }

  addNewItem(value: string): void {
    if (value) {
      this.items.push({
        id: this.randomNumber(),
        done: false,
        description: value,
      });
    }
  }

  removeFromList(item: any): void {
    if (item.done) {
      this.items.splice(this.items.findIndex(it => it.id === item.id), 1);
    } else {
      alert('No puedes borrar un item no completado');
    }
  }

  private randomNumber(): number {
    return Math.floor((Math.random() * 1000) + 1);
  }

}
