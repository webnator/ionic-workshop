import {ListItem} from './ListItem';

export class List {
  items: Array<ListItem>;

  constructor(...args: Array<ListItem>) {
    this.items = args;
  }

  get doneItems(): Array<ListItem> {
    return this.items.filter(it => it.done);
  }

  get pendingItems(): Array<ListItem> {
    return this.items.filter(it => !it.done);
  }

  add (item: ListItem) {
    this.items.push(item);
  }

  remove (id: number) {
    const item = this.items.find(it => it.id === id);
    if (item && item.done) {
      this.items.splice(this.items.findIndex(it => it.id === id), 1);
    } else {
      alert('No puedes borrar un item no completado');
    }
  }

  get listTotal(): number {
    let total = 0;
    this.items.forEach(item => {
      total += (item.price * item.quantity);
    });
    return total;

    //return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}
