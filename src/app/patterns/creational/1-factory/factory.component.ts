import { Component, OnInit } from '@angular/core';
import { Graph1 } from './classes/graph1.class';
import { Graph2 } from './classes/graph2.class';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.scss'],
})
export class FactoryComponent implements OnInit {
  public graph1Text: string;
  public graph2Text: string;

  constructor() {
    console.clear();
  }

  ngOnInit(): void {
    this.setGraphs();
  }

  public setGraphs() {
    const graph1 = new Graph1();
    this.graph1Text = graph1.draw([]);

    const graph2 = new Graph2();
    this.graph2Text = graph2.draw([]);
  }
}
