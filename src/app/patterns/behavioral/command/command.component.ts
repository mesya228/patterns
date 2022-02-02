import { Component, OnInit } from '@angular/core';
import { Command } from './classes/command.class';
import { Invoker } from './classes/invoker.class';
import { Receiver } from './classes/receiver.class';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss']
})
export class CommandComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const invoker = new Invoker();
    const receiver = new Receiver();

    invoker.setOnStart(new Command(receiver, '', ''));
    invoker.setOnFinish(new Command(receiver, 'Send email', 'Save report'));

    invoker.request();
  }

}
