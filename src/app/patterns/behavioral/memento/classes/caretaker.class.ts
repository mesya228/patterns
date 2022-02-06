import { Memento } from './memento.class';
import { Originator } from './originator.class';

export class CareTaker {
  private mementos: Memento[] = [];
  private originator: Originator;

  constructor(originator: Originator) {
    this.originator = originator;
  }

  public backup(): void {
    this.mementos.push(this.originator.save());
    console.log('backup', this.mementos);
  }

  public undo(): void {
    if (!this.mementos.length) {
      return;
    }

    this.mementos.pop();

    this.originator.restore(
      this.mementos[this.mementos.length - 1] || new Memento('')
    );
  }

  public getHistory(): string[] {
    return this.mementos.map((moment) => moment.getName());
  }
}
