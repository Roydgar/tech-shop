import { Injectable } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';
import { OrderModel } from '../model/order.model';
import { Observable, of } from 'rxjs';
import { ProductCategory } from '../../products/enums/product-category.enum';

const orders: OrderModel[] = [
  new OrderModel(
    [ {
      id: 1,
      name: 'Samsung Galaxy',
      description: 'Phone for real man',
      price: 505,
      category: ProductCategory.PHONE,
      isAvailable: true
    }],
    'Vitia',
    'Ivan@gmail.com',
  1
  )
];

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private ordersBaseUrl = 'http://localhost:3000/orders';

  constructor(private cartService: CartService) {
  }

  createOrder(consumerName: string, consumerEmail: string) {
    const products = this.cartService.cartItems
      .map(item => item.product);

    const order = new OrderModel(
      products,
      consumerName,
      consumerEmail
    );

    console.log(order);
    // http.post()
  }

  getOrders(): Observable<OrderModel[]> {
    return of(orders);
  }
}
