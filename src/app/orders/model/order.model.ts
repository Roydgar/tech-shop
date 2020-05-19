import { ProductModel } from '../../products/models/product.model';

export class OrderModel {
  constructor(public products: ProductModel[],
              public consumerName: string,
              public consumerEmail: string,
              public id?: number) {
  }
}
