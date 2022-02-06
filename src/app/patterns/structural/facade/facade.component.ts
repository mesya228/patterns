import { Component, OnInit } from '@angular/core';
import { Facade, Service2 } from './classes';
import { Service1 } from './classes/service1.service';

@Component({
  selector: 'app-facade',
  templateUrl: './facade.component.html',
  styleUrls: ['./facade.component.scss'],
})
export class FacadeComponent implements OnInit {
  public text: string;

  constructor() {
    console.clear();
  }

  ngOnInit(): void {
    const s1 = new Service1();
    const s2 = new Service2();
    const facade = new Facade(s1, s2);
    this.text = facade.getResult();
  }
}
