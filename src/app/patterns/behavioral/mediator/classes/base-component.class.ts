import { Mediator } from './mediator.class';

export class BaseComponent {
  protected mediator: Mediator;

  constructor(mediator: Mediator = null) {
    this.mediator = mediator;
  }

  public setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }
}
