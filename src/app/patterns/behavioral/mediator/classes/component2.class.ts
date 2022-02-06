import { BaseComponent } from './base-component.class';

export class Component2 extends BaseComponent {
  public doA(): void {
    console.log('Component 2 does A.');
    this.mediator.notify(this, 'A');
  }

  public doB(): void {
    console.log('Component 2 does B.');
    this.mediator.notify(this, 'B');
  }
}
