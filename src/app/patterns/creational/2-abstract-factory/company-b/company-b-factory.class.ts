import { IFactory, IProduct1, IProduct2 } from '../interfaces';
import { ProductB1, ProductB2 } from './products';

export class CompanyBFactory implements IFactory {
  constructor() {}

  public createProduct1(): IProduct1 {
    return new ProductB1();
  }

  public createProduct2(): IProduct2 {
    return new ProductB2();
  }
}
