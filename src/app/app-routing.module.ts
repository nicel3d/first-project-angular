import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardItemComponent } from './components/card-item/card-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { TestDirectiveComponent } from './components/test-directive/test-directive.component';

const routes: Routes = [
  { path: 'items', component: CardItemComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'test-directive', component: TestDirectiveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
