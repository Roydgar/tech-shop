import { ProductModel } from '../../products/models/product.model';

export class OrderModel {
  constructor(public products: ProductModel[],
              public customerName: string,
              public customerEmail: string,
              public id?: number) {
  }
}
