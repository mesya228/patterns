import { Component, OnInit } from '@angular/core';
import { Singleton } from './singleton.class';

@Component({
  selector: 'app-singleton',
  templateUrl: './singleton.component.html',
  styleUrls: ['./singleton.component.scss'],
})
export class SingletonComponent implements OnInit {
  public text: string;

  constructor() {}

  ngOnInit(): void {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    this.text =
      s1 === s2
        ? 'Singleton works, both variables contain the same instance.'
        : 'Singleton failed, variables contain different instances.';
    console.log(this.text);
  }
}
