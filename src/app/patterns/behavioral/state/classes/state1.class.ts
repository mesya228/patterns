import { State } from './state.class';
import { State2 } from './state2.class';

export class State1 extends State {
  public handle1(): string {
    const res = 'State 1 handle 1';
    console.log(res);
    this.context.changeState(new State2());
    return res;
  }

  public handle2(): string {
    const res = 'State 1 handle 2';
    console.log(res);
    return res;
  }
}
