import { Graph1 } from './graph1.class';
import { Graph2 } from './graph2.class';

export abstract class GraphFactory {
  public graph?: Graph1 | Graph2;
  public abstract factoryMethod(): Graph1 | Graph2;
  protected abstract draw(): void;

  constructor() {
  }
}
