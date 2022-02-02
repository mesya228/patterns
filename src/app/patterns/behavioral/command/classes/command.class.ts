import { Receiver } from './receiver.class';

export class Command {
  private receiver: Receiver;

  private payload1: string;
  private payload2: string;

  constructor(receiver: Receiver, payload1: string, payload2: string) {
    this.receiver = receiver;
    this.payload1 = payload1;
    this.payload2 = payload2;
  }

  public execute(): void {
    console.log(
      'ComplexCommand: Complex stuff should be done by a receiver object.'
    );

    this.receiver.doSomething(this.payload1);
    this.receiver.doSomethingElse(this.payload2);
  }
}
