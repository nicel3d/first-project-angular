import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  private checkoutForm: FormGroup;

  constructor(private productService: ProductService, private formBuilder: FormBuilder) {
    this.checkoutForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      description: new FormControl('', [
        Validators.required
      ]),
      price: new FormControl(0, [
        Validators.required
      ])
    });
  }

  get title() {
    return this.checkoutForm.controls.title.invalid && this.checkoutForm.controls.title.touched;
  }

  get description() {
    return this.checkoutForm.controls.description.invalid && this.checkoutForm.controls.description.touched;
  }

  get price() {
    return this.checkoutForm.controls.price.invalid && this.checkoutForm.controls.price.touched;
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      // Process checkout data here
      console.warn('Your order has been submitted', this.checkoutForm.value);
      this.productService.addProduct(this.checkoutForm.value);
      // this.productService.addProduct();
      this.checkoutForm.reset();
    }
  }

  ngOnInit() {
  }

}
