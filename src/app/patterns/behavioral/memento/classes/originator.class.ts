import { Memento } from './memento.class';

export class Originator {
  private state: string;

  constructor(state: string) {
    this.state = state;
  }

  public getState(): string {
    return this.state;
  }

  public editState(state: string) {
    this.state = state;
  }

  public save() {
    return new Memento(this.state);
  }

  public restore(memento: Memento): void {
    this.state = memento.getState();
  }
}
