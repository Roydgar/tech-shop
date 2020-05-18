import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CartListComponent } from './components/cart-list/cart-list.component';

@NgModule({
  declarations: [CartListComponent],
  imports: [
    SharedModule,
  ],
  exports: [CartListComponent]
})
export class CartModule {
}
