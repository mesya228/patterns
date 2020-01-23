import { Command } from '../interfaces/command.interface';
import { Receiver } from './receiver.class';

export class RequestSendingCommand implements Command {
  private payload: string;

  constructor(payload: string) {
      this.payload = payload;
  }

  public execute(): void {
    alert(`${this.payload} is sending...`);
  }
}

export class RequestSentCommand implements Command {
  private receiver: Receiver;

  constructor(receiver: Receiver) {
      this.receiver = receiver;
  }

  public execute(): void {
      this.receiver.showRequestSentPopup();
      this.receiver.closeDialog();
  }
}