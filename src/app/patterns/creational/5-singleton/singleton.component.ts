import { Component, OnInit } from '@angular/core';
import { Singleton } from './singleton.class';

@Component({
  selector: 'app-singleton',
  templateUrl: './singleton.component.html',
  styleUrls: ['./singleton.component.scss'],
})
export class SingletonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if (s1 === s2) {
      console.log('Singleton works, both variables contain the same instance.');
    } else {
      console.log('Singleton failed, variables contain different instances.');
    }
  }
}
