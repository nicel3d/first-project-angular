import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestDirectiveComponent } from './components/test-directive/test-directive.component';
import { HighlightDirective } from './utils/directives/highlight.directive';
import { CapitalizeDirective } from './utils/directives/capitalize.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardItemComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    TestDirectiveComponent,
    HighlightDirective,
    CapitalizeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
