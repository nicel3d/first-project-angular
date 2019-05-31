import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products: Product[];
  public product: Product;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.products = [];
    Array.from(new Array(10)).forEach((x, index) => {
      const newIndex = index + 1;
      this.products.push(new Product({
        id: index,
        title: `Продукт № ${newIndex}`,
        description: `Продукт № ${newIndex}`,
        price: newIndex * 100
      }));
    });
  }

  onNotify(product: Product) {
    window.alert(`You will be notified when the product goes on sale ${product.title}`);
  }

  onDetails(product: Product) {
    this.product = product;
    this.router.navigate(['/products', product.id]).then();
  }
}

export class Product implements IProduct {
  public id?: number;
  public title: string;
  public description: string;
  public price: number;

  constructor(data?: IProduct) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.price = data.price;
  }
}

export interface IProduct {
  id?: number;
  title: string;
  description: string;
  price: number;
}
