import { IVisitor } from '../interfaces/visitor.interfaces';
import { Component1 } from './component1.class';

export class Visitor1 implements IVisitor {
  public getComponentData(component: Component1): string {
    const res = component.getComponentData() + ' from Visitor 1';
    console.log(res);
    return res;
  }
}
