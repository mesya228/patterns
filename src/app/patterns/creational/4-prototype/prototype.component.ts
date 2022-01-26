import { Component, OnInit } from '@angular/core';
import { ComponentWithBackReference, Prototype } from './classes';

@Component({
  selector: 'app-prototype',
  templateUrl: './prototype.component.html',
  styleUrls: ['./prototype.component.scss'],
})
export class PrototypeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const proto1 = new Prototype();
    proto1.primitive = 'test';
    proto1.date = new Date();
    proto1.deepObj = {
      test: {
        subTest: 'test',
      },
    };
    proto1.circularReference = new ComponentWithBackReference(proto1);

    const proto2: Prototype = proto1.clone();
    console.log(
      proto2.primitive === proto1.primitive
        ? 'primitive copied'
        : 'primitive NOT copied'
    );
    console.log(
      proto2.date === proto1.date ? 'date copied' : 'date NOT copied'
    );
    console.log(
      proto2.deepObj === proto1.deepObj
        ? 'deepObj copied'
        : 'deepObj NOT copied'
    );
    console.log(
      proto2.circularReference === proto1.circularReference
        ? 'circularReference copied'
        : 'circularReference NOT copied'
    );
  }
}
