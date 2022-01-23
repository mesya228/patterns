import { IFactory, IProduct1, IProduct2 } from '../interfaces';
import { Product1, Product2 } from './products';

export class CompanyAFactory implements IFactory {
  constructor() {}

  public createProduct1(): IProduct1 {
    return new Product1();
  }

  public createProduct2(): IProduct2 {
    return new Product2();
  }
}
