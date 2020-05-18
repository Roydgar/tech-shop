import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../../shared/services/cart.service';
import { MessageSnackbarComponent } from '../../../shared/components/message-snackbar/message-snackbar.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products$: Observable<ReadonlyArray<ProductModel>>;

  constructor(private cartService: CartService,
              private snackBar: MatSnackBar,
              private router: Router,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

  onBuy(event: Event, product: ProductModel): void {
    event.preventDefault();

    this.cartService.addProduct(product);
    this.snackBar.openFromComponent(MessageSnackbarComponent, {
      data: 'Product was Added to Cart!'
    });
  }

  onViewInfo(event: Event, product: ProductModel) {
    event.preventDefault();

    const path = ['/products', product.id];
    this.router.navigate(path);
  }
}
