import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  items: string[] = ['Abacate', 'Pera', 'Maçã', 'Uva', 'Morango', 'Pêssego', 'Óleo de motor', 'Melancia'];
  newItem: string = '';

  addItem() {
    if (this.newItem) {
      this.items.push(this.newItem);
      this.newItem = '';
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
