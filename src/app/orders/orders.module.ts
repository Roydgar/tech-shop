import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ProcessOrderComponent } from './components/process-order/process-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderListComponent } from './components/order-list/order-list.component';

@NgModule({
  declarations: [ProcessOrderComponent, OrderListComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: []
})
export class OrdersModule {
}
