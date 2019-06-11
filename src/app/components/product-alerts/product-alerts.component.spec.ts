import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAlertsComponent } from './product-alerts.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../services/product.service';

describe('ProductAlertsComponent', () => {
  let testHostComponentComponent: TestHostComponent;
  let testHostComponentFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductAlertsComponent, TestHostComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    testHostComponentFixture = TestBed.createComponent(TestHostComponent);
    testHostComponentComponent = testHostComponentFixture.componentInstance;
    testHostComponentFixture.detectChanges();
  });

  it('should create', () => {
    expect(testHostComponentComponent).toBeTruthy();
  });

  it('продукт с ценой < 100 *не имеет* кнопки', () => {
    testHostComponentComponent.setProductWithPrice10();
    testHostComponentFixture.detectChanges();
    expect(testHostComponentFixture.nativeElement.querySelector('button')).toBeNull();
  });

  it('продукт с ценой 200 содержит кнопку', () => {
    testHostComponentComponent.onReset();
    testHostComponentComponent.setProductWithPrice200();
    testHostComponentFixture.detectChanges();
    expect(testHostComponentFixture.nativeElement.querySelector('button')).toBeDefined();
  });

  it('нажатие кнопки в дочернем элементе и возвращение Product в верхний уровень', () => {
    testHostComponentComponent.onReset();
    testHostComponentComponent.setProductWithPrice200();
    testHostComponentFixture.detectChanges();
    testHostComponentFixture.nativeElement.querySelector('button').click();
    expect(testHostComponentComponent.product).toEqual(testHostComponentComponent.isProductNotify);
  });
});

@Component({
  selector: `app-host-component`,
  template: `<app-product-alerts [product]="product" (notify)="onNotify(product)"></app-product-alerts>`
})
class TestHostComponent implements OnInit {
  @ViewChild(ProductAlertsComponent, null)
  public productAlertsComponent: ProductAlertsComponent;
  public product?: Product;
  public isProductNotify?: Product;

  ngOnInit() {
    this.onReset();
  }

  onReset() {
    this.isProductNotify = this.product = null;
  }

  onNotify(product: Product) {
    this.isProductNotify = product;
  }

  setProductWithPrice10() {
    this.product = new Product({
      id: 1,
      price: 10,
      description: '10',
      title: '1'
    });
  }

  setProductWithPrice200() {
    this.product = new Product({
      id: 2,
      price: 200,
      description: '200',
      title: '2'
    });
  }
}
