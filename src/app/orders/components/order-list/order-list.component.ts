import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { OrderModel } from '../../model/order.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders$: Observable<OrderModel[]>;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orders$ = this.orderService.getOrders();
  }

}
