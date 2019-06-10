import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = this.productService.getItems()[+params.get('productId') - 1] || null;
    });
  }

}
