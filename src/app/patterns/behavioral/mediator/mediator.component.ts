import { Component, OnInit } from '@angular/core';
import { Component1 } from './classes/component1.class';
import { Component2 } from './classes/component2.class';
import { Mediator } from './classes/mediator.class';

@Component({
  selector: 'app-mediator',
  templateUrl: './mediator.component.html',
  styleUrls: ['./mediator.component.scss'],
})
export class MediatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const c1 = new Component1();
    const c2 = new Component2();
    const mediator = new Mediator(c1, c2);

    c1.doA();
    console.log('');
    c2.doB();
  }
}
