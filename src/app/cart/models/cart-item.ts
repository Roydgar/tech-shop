import { ProductModel } from '../../products/models/product.model';

export class CartItem {

  constructor(
    public id: number,
    public product: ProductModel,
    public quantity: number
  ) {}

}
