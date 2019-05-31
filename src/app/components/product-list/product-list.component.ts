import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public product: Product;

  constructor(private router: Router, private productService: ProductService) {
  }

  ngOnInit() {
    if (!this.productService.getItems().length) {
      Array.from(new Array(10)).forEach((x, index) => {
        const newIndex = index + 1;
        this.productService.addProduct(
          new Product({
            id: index,
            title: `Продукт № ${newIndex}`,
            description: `Продукт № ${newIndex}`,
            price: newIndex * 100
          })
        );
      });
    }
  }

  onNotify(product: Product) {
    window.alert(`You will be notified when the product goes on sale ${product.title}`);
  }

  onDetails(product: Product) {
    this.product = product;
    this.router.navigate(['/products', product.id]).then();
  }
}
