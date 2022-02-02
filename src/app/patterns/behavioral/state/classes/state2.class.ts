import { State } from './state.class';
import { State1 } from './state1.class';

export class State2 extends State {
  public handle1(): string {
    const res = 'State 2 handle 1';
    console.log(res);
    this.context.changeState(new State1());
    return res;
  }

  public handle2(): string {
    const res = 'State 2 handle 2';
    console.log(res);
    return res;
  }
}
