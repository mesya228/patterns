import { Component, OnInit } from '@angular/core';
import { Adapter, Service1, Service2 } from './classes';

@Component({
  selector: 'app-adapter',
  templateUrl: './adapter.component.html',
  styleUrls: ['./adapter.component.scss'],
})
export class AdapterComponent implements OnInit {
  public s1: string;
  public s2: string;
  public adapter: string;

  constructor() {
    console.clear();
  }

  ngOnInit(): void {
    const s1 = new Service1();
    this.s1 = s1.request();

    const s2 = new Service2();
    this.s2 = s2.request();

    const adapter = new Adapter(s2);
    this.adapter = adapter.request();
  }
}
