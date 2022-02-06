import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { CompanyAFactory } from './company-a/company-a-factory.class.ts';
import { CompanyBFactory } from './company-b/company-b-factory.class';

@Component({
  selector: 'app-abstract-factory',
  templateUrl: './abstract-factory.component.html',
  styleUrls: ['./abstract-factory.component.scss'],
})
export class AbstractFactoryComponent implements OnInit {
  public productA1: string;
  public productA2: string;
  public productB1: string;
  public productB2: string;

  constructor() {
    console.clear();
  }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts() {
    const productA = new CompanyAFactory();
    const productB = new CompanyBFactory();

    timer(1000)
      .pipe(take(1))
      .subscribe(() => {
        this.productA1 = productA.createProduct1().getProduct();
        console.log(this.productA1);
        this.productA2 = productA.createProduct2().getProduct();

        this.productB1 = productB.createProduct1().getProduct();
        this.productB2 = productB.createProduct2().getProduct();
      });
  }
}
