import { Template } from "./template.class";

export class Class1 extends Template {
  protected operation1(): void {
    console.log('Class1: Implemented Operation1');
  }

  protected operation2(): void {
    console.log('Class1: Implemented Operation2');
  }
}
