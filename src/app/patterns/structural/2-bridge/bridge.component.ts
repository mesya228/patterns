import { Component, OnInit } from '@angular/core';
import { Abstraction } from './classes';
import { Implementation2 } from './classes/implementation1.class';
import { Implementation1 } from './classes/implementation2.class';

@Component({
  selector: 'app-bridge',
  templateUrl: './bridge.component.html',
  styleUrls: ['./bridge.component.scss'],
})
export class BridgeComponent implements OnInit {
  public implementation1: string;
  public implementation2: string;

  constructor() {}

  ngOnInit(): void {
    let implementation = new Implementation1();
    let abstraction = new Abstraction(implementation);
    this.implementation1 = abstraction.operation();

    implementation = new Implementation2();
    abstraction = new Abstraction(implementation);
    this.implementation2 = abstraction.operation();
  }
}
