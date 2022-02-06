import { IComponent } from '../interfaces/component.interface';

export class ConcreteComponent implements IComponent {
  public operation(): string {
    return 'Component';
  }
}
