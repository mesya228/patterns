import { Component, OnInit } from '@angular/core';
import { Context } from './classes/context.class';
import { Strategy1 } from './classes/strategy1.class';
import { Strategy2 } from './classes/strategy2.class';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.scss']
})
export class StrategyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const context = new Context(new Strategy1());

    context.getRoute(['test1', 'test2']);

    context.setStrategy(new Strategy2());
    context.getRoute(['test1', 'test2']);
  }

}
