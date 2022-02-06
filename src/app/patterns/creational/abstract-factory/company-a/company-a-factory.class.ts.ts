import { IFactory, IProduct1, IProduct2 } from '../interfaces';
import { ProductA1, ProductA2 } from './products';

export class CompanyAFactory implements IFactory {
  constructor() {
    console.clear();
  }

  public createProduct1(): IProduct1 {
    return new ProductA1();
  }

  public createProduct2(): IProduct2 {
    return new ProductA2();
  }
}
