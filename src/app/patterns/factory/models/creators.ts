import { Product } from '../interfaces/product';
import { Creator } from './creator';
import { ConcreteProduct1, ConcreteProduct2 } from './products';

export class ConcreteCreator1 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}

export class ConcreteCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}