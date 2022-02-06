import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { AbstractFactoryComponent } from './abstract-factory.component';

describe('AbstractFactoryComponent', () => {
  let component: AbstractFactoryComponent;
  let fixture: ComponentFixture<AbstractFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractFactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get products', fakeAsync(() => {
    component.getProducts();

    tick(1000);
    expect(component.productA1).toEqual('ProductA1');
  }));
});
