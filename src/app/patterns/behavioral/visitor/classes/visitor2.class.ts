import { IVisitor } from '../interfaces/visitor.interfaces';
import { Component2 } from './component2.class';

export class Visitor2 implements IVisitor {
  public getComponentData(component: Component2): string {
    const res = component.getComponentData() + ' from Visitor 2';
    console.log(res);
    return res;
  }
}
