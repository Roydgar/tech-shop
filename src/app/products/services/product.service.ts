import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductCategory } from '../enums/product-category.enum';

const products: ProductModel[] = [
  {
    id: 1,
    name: 'Samsung Galaxy',
    description: 'Phone for real man',
    price: 505,
    category: ProductCategory.PHONE,
    isAvailable: true
  },
  {
    id: 2,
    name: 'Iphone 11',
    description: 'Phone for real woman',
    price: 1500,
    category: ProductCategory.PHONE,
    isAvailable: true
  }
  ];

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsBaseUrl = 'http://localhost:3000/products';

  // private http: HttpClient
  constructor() {
  }

  getProduct(id: number): Observable<ProductModel> {
    // const url = `${this.productsBaseUrl}/${id}`;
    // return this.http.get<ProductModel>(url);
    return of(products.find(p => p.id === id));
  }

  getProducts(): Observable<ProductModel[]> {
    // return this.http.get<ProductModel[]>(this.productsBaseUrl);
    return of(products);

  }
}
