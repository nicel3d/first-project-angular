import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[];

  constructor() {
  }

  addProduct(product: Product) {
    if (Array.isArray(this.products)) {
      this.products.push(product);
    } else {
      this.products = new Array<Product>(product);
    }
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(x => x.id !== id);
  }

  getItems() {
    return this.products || [];
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

