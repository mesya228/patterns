import { Template } from './template.class';

export class Class2 extends Template {
  protected operation1(): void {
    console.log('Class2: Implemented Operation1');
  }

  protected operation2(): void {
    console.log('Class2: Implemented Operation2');
  }
}
