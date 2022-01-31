import { Component, OnInit } from '@angular/core';
import { PasswordComplexHandler } from './classes/password-complex-handler.class';
import { PasswordHackHandler } from './classes/password-hack-handler.class';
import { PasswordLengthHandler } from './classes/password-length-handler.class';

@Component({
  selector: 'app-chain',
  templateUrl: './chain.component.html',
  styleUrls: ['./chain.component.scss'],
})
export class ChainComponent implements OnInit {
  public passedHackText: boolean;
  public faildedHackText: boolean;

  public passedLengthText: boolean;
  public faildedLengthHackText: boolean;

  public passedComplexText: boolean;
  public faildedComplexText: boolean;

  constructor() {}

  ngOnInit(): void {
    const handlers = [
      new PasswordHackHandler(),
      new PasswordLengthHandler(),
      new PasswordComplexHandler(),
    ];

    handlers.reduce((prev, handler) => {
      if (prev) {
        prev.setNext(handler);
      }

      return handler;
    }, null);

    this.passedHackText = handlers[0].handle({ type: 'Hack', content: {login: 'test', password: 'qwerty123'} });
    handlers[0].handle({ type: 'Hack', content: {login: 'test', password: 'qwerty123'} });
    handlers[0].handle({ type: 'Hack', content: {login: 'test', password: 'qwerty123'} });
    handlers[0].handle({ type: 'Hack', content: {login: 'test', password: 'qwerty123'} });
    handlers[0].handle({ type: 'Hack', content: {login: 'test', password: 'qwerty123'} });
    this.faildedHackText = handlers[0].handle({ type: 'Hack', content: {login: 'test', password: 'qwerty123'} });

    this.passedLengthText = handlers[0].handle({ type: 'Length', content: 'testtest' });
    this.faildedLengthHackText = handlers[0].handle({ type: 'Length', content: 'test' });

    this.passedComplexText = handlers[0].handle({ type: 'Complex', content: 'testTEST' });
    this.faildedComplexText = handlers[0].handle({ type: 'Complex', content: '55' });
  }
}
