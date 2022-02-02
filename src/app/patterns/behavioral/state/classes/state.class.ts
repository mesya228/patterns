import { Context } from './context.class';

export abstract class State {
  protected context: Context;

  public setContext(context: Context) {
    this.context = context;
  }

  public abstract handle1(): string;
  public abstract handle2(): string;
}
