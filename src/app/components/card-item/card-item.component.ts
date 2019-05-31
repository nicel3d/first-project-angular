import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  items: Item[] = [];

  constructor() {
  }

  ngOnInit() {
    Array.from(new Array<number>(2)).forEach((x, index) => {
      this.items.push(new Item({
        title: `Title - ${index + 1}`,
        content: `Content - ${index + 1}`
      }));
    });
  }

  onClick(item: Item) {
    console.log(item.title);
  }
}

export class Item implements IItem {
  public title: string;
  public content: string;

  constructor(data: IItem) {
    this.title = data.title;
    this.content = data.content;
  }
}

export interface IItem {
  title: string;
  content: string;
}
