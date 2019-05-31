import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../services/product.service';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product: Product;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
