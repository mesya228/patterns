import { Component, OnInit } from '@angular/core';
import { CompanyAFactory } from './company-a/company-a-factory.class.ts';
import { CompanyBFactory } from './company-b/company-b-factory.class';

@Component({
  selector: 'app-abstract-factory',
  templateUrl: './abstract-factory.component.html',
  styleUrls: ['./abstract-factory.component.scss'],
})
export class AbstractFactoryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const productA = new CompanyAFactory();
    productA.createProduct1();
    productA.createProduct2();

    const productB = new CompanyBFactory();
    productB.createProduct1();
    productB.createProduct2();
  }
}
