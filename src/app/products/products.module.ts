import { NgModule } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  imports: [
    SharedModule
  ],
  exports: [],
  providers: []
})
export class ProductsModule {
}
