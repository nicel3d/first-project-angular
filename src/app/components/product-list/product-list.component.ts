import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products: Product[];
  public product: Product;

  constructor() {
  }

  ngOnInit() {
    this.products = [];
    Array.from(new Array(10)).forEach((x, index) => {
      const newIndex = index + 1;
      this.products.push(new Product({
        title: `Продукт № ${newIndex}`,
        description: `Продукт № ${newIndex}`,
        price: newIndex * 100
      }));
    });
  }

  onNotify(product: Product) {
    window.alert(`You will be notified when the product goes on sale ${product.title}`);
  }

  onAlertOpen(product: Product) {
    this.product = product;
    console.log(product.title);
  }
}

export class Product implements IProduct {
  public title: string;
  public description: string;
  public price: number;

  constructor(data?: IProduct) {
    this.title = data.title;
    this.description = data.description;
    this.price = data.price;
  }
}

export interface IProduct {
  title: string;
  description: string;
  price: number;
}
