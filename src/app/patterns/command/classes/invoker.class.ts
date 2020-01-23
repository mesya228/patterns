import { Command } from '../interfaces/command.interface';

export class Invoker {
  private onStart: Command;

  private onFinish: Command;

  /**
   * Инициализация команд.
   */
  public setOnStart(command: Command) {
    this.onStart = command;
  }

  public setOnFinish(command: Command) {
    this.onFinish = command;
  }

  public saveReport(formValue: any) {
    if (this.isCommand(this.onStart)) {
      this.onStart.execute();
    }

    this.sendRequest(formValue);

    if (this.isCommand(this.onFinish)) {
      this.onFinish.execute();
    }
  }

  private sendRequest(formValue: any) {
    return {status: true}
  }

  private isCommand(object): object is Command {
    return object.execute !== undefined;
  }
}
