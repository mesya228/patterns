import { Component } from '@angular/core';

import { Invoker } from './classes/invoker.class';
import { RequestSendingCommand, RequestSentCommand } from './classes/commands.class';
import { Receiver } from './classes/receiver.class';
import { CommandForm } from './classes/command-form.class';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss']
})
export class CommandComponent extends CommandForm {
  constructor() {
    super();
  }

  public onSubmit({ form }) {
    const invoker = new Invoker();

    invoker.setOnStart(new RequestSendingCommand('Request'));
    const receiver = new Receiver();
    invoker.setOnFinish(new RequestSentCommand(receiver));

    invoker.saveReport(form);
  }
}
