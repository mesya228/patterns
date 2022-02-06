import { IProduct1, IProduct2 } from '.';

export interface IFactory {
  createProduct1(): IProduct1;
  createProduct2(): IProduct2;
}
