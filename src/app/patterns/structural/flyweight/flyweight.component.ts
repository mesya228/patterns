import { Component, OnInit } from '@angular/core';
import { FlyweightFactory } from './classes/flyweight-factory.class';

@Component({
  selector: 'app-flyweight',
  templateUrl: './flyweight.component.html',
  styleUrls: ['./flyweight.component.scss'],
})
export class FlyweightComponent implements OnInit {
  constructor() {
    console.clear();
  }

  ngOnInit(): void {
    const factory = new FlyweightFactory([
      ['Chevrolet', 'Camaro2018', 'pink'],
      ['Mercedes Benz', 'C300', 'black'],
      ['Mercedes Benz', 'C500', 'red'],
      ['BMW', 'M5', 'red'],
      ['BMW', 'X6', 'white'],
    ]);
    factory.listFlyweights();

    this.addCarToPoliceDatabase(
      factory,
      'CL234IR',
      'James Doe',
      'BMW',
      'M5',
      'red'
    );
    this.addCarToPoliceDatabase(
      factory,
      'CL234IR',
      'James Doe',
      'BMW',
      'X1',
      'red'
    );

    factory.listFlyweights();
  }

  private addCarToPoliceDatabase(
    ff: FlyweightFactory,
    plates: string,
    owner: string,
    brand: string,
    model: string,
    color: string
  ) {
    console.log('\nClient: Adding a car to database.');
    const flyweight = ff.getFlyweight([brand, model, color]);

    // Клиентский код либо сохраняет, либо вычисляет внешнее состояние и
    // передает его методам легковеса.
    flyweight.operation([plates, owner]);
  }
}
