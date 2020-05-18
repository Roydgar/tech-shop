import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { AboutAppComponent } from './layout/about-app/about-app.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { CartListComponent } from './cart/components/cart-list/cart-list.component';
import { ProductComponent } from './products/components/product/product.component';
import { ProcessOrderComponent } from './orders/components/process-order/process-order.component';
import { OrderListComponent } from './orders/components/order-list/order-list.component';

const routes: Routes = [
  {
    path: 'home',
    component: AboutAppComponent
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'products/:productID',
    component: ProductComponent
  },
  {
    path: 'checkout',
    component: ProcessOrderComponent
  },
  {
    path: 'orders',
    component: OrderListComponent
  },
  {
    path: 'cart',
    component: CartListComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
