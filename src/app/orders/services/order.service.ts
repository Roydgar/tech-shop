import { Injectable } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';
import { OrderModel } from '../model/order.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductModel } from '../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private ordersBaseUrl = 'http://localhost:8080/orders';

  constructor(private cartService: CartService,
              private http: HttpClient) {
  }

  createOrder(consumerName: string, consumerEmail: string): Observable<OrderModel> {
    const products = this.cartService.cartItems
      .map(item => item.product);

    const order = new OrderModel(
      products,
      consumerName,
      consumerEmail
    );

    console.log(order);
    const body = JSON.stringify(order);
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post<OrderModel>(this.ordersBaseUrl, body, options);
  }

  getOrders(): Observable<OrderModel[]> {
    return this.http.get<OrderModel[]>(this.ordersBaseUrl);
  }
}
