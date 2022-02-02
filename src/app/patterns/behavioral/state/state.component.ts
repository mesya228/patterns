import { Component, OnInit } from '@angular/core';
import { Context } from './classes/context.class';
import { State1 } from './classes/state1.class';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const context = new Context(new State1());

    context.request1();
    context.request2();
  }

}
