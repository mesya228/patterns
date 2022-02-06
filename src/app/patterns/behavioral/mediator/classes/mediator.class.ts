import { Component1 } from './component1.class';
import { Component2 } from './component2.class';

export class Mediator {
  private component1: Component1;
  private component2: Component2;

  private notifyMethods = [this.eventA.bind(this), this.eventB.bind(this)];

  constructor(component1: Component1, component2: Component2) {
    this.component1 = component1;
    this.component1.setMediator(this);

    this.component2 = component2;
    this.component2.setMediator(this);
  }

  public notify(sender: object, event: string): void {
    this.notifyMethods[event]();
  }

  private eventA() {
		this.component2.doB();
	}

  private eventB() {
		this.component2.doA();
		this.component2.doB();
	}
}
