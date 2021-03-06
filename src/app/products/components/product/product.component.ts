import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { Location } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: ProductModel;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  onGoBack() {
    this.location.back();
  }

  private loadProduct(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('productID');
    this.productService.getProduct(id).subscribe(product => this.product = product);
  }
}
