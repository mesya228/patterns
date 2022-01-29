import { Component, OnInit } from '@angular/core';
import { Graph1 } from './classes/graph1.class';
import { Graph2 } from './classes/graph2.class';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.scss'],
})
export class FactoryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const graph1 = new Graph1();
    graph1.draw([]);
    const graph2 = new Graph2();
    graph2.draw([]);
  }
}
