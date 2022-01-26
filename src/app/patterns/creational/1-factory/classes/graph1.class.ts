import { GraphFactory } from './factory.class';

export class Graph1 extends GraphFactory {
  public factoryMethod(): Graph1 {
    return new Graph1();
  }

	public draw(data = []) {

	}
}
