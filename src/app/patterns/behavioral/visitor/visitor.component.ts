import { Component, OnInit } from '@angular/core';
import { Component1 } from './classes/component1.class';
import { Component2 } from './classes/component2.class';
import { Visitor1 } from './classes/visitor1.class';
import { Visitor2 } from './classes/visitor2.class';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.scss'],
})
export class VisitorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const components = [new Component1(), new Component2()];
    const visitor1 = new Visitor1();
    const visitor2 = new Visitor2();

    components.forEach(component => {
      component.accept(visitor1);
      component.accept(visitor2);
    });
  }
}
