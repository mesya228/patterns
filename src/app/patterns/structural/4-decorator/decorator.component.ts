import { Component, OnInit } from '@angular/core';
import { ConcreteComponent } from './classes/component.class';
import { Decorator } from './classes/decorator.class';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.scss']
})
export class DecoratorComponent implements OnInit {
  public componentText: string;
  public decoratorText: string;

  constructor() { }

  ngOnInit(): void {
    const component = new ConcreteComponent();
    this.componentText = component.operation();

    const decorator = new Decorator(component);
    this.decoratorText = decorator.operation();
  }

}
