import { GraphFactory } from './factory.class';

export class Graph2 extends GraphFactory {
  public factoryMethod(): Graph2 {
    return new Graph2();
  }

  public draw(data = []) {

	}
}
