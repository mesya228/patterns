import { IComponent } from '../interfaces/component.interface';

export class Decorator implements IComponent {
  constructor(protected component: IComponent) {}

  public operation(): string {
    return `Decorated ${this.component.operation()}`;
  }
}
