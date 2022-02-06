import { IVisitor } from '../interfaces/visitor.interfaces';

export class Component2 {
  public accept(visitor: IVisitor) {
    visitor.getComponentData(this);
  }

  public getComponentData(): string {
    return 'Component 2';
  }
}
