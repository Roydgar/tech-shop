import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsBaseUrl = 'http://localhost:8080/products';

  constructor(private http: HttpClient) {
  }

  getProduct(id: number): Observable<ProductModel> {
    const url = `${this.productsBaseUrl}/${id}`;
    return this.http.get<ProductModel>(url);
  }

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.productsBaseUrl);
  }
}
