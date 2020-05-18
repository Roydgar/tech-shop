import { Component, OnDestroy, OnInit } from '@angular/core';

import { CartItem } from '../../models/cart-item';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {

  cartItems: CartItem[];
  private subscription: Subscription;

  constructor(public cartService: CartService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loadCartItems();
  }

  onDeleteClick(event: Event, cartItemId: number): void {
    event.preventDefault();
    this.cartService.deleteItem(cartItemId);
  }

  onIncreaseQuantityClick(event: Event, cartItemId: number): void {
    event.preventDefault();
    this.cartService.increaseQuantity(cartItemId);
  }

  onDecreaseQuantityClick(event: Event, cartItemId: number): void {
    event.preventDefault();
    this.cartService.decreaseQuantity(cartItemId);
  }

  onClearCartClick(event: Event) {
    event.preventDefault();
    this.cartService.clearCart();
  }

  areCartItemsEmpty(): boolean {
    return this.cartItems && this.cartItems.length === 0;
  }

  confirmOrder() {
    this.router.navigate(['checkout']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private loadCartItems() {
    this.cartItems = this.cartService.cartItems;

    this.subscription = this.cartService.channel$.subscribe(
      items => this.cartItems = items
    );
  }
}
