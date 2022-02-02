import { State } from './state.class';

export class Context {
  private state: State;

  constructor(state: State) {
    this.changeState(state);
  }

  public changeState(state: State) {
    this.state = state;
    this.state.setContext(this);
  }

  public request1() {
    this.state.handle1();
  }

  public request2() {
    this.state.handle2();
  }
}
