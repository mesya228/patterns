import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FactoryComponent } from './factory.component';

describe('FactoryComponent', () => {
  let component: FactoryComponent;
  let fixture: ComponentFixture<FactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FactoryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set graphs', () => {
    component.setGraphs();

    expect(component.graph1Text).toEqual('Graph1 drawed');
    expect(component.graph2Text).toEqual('Graph2 drawed');

    expect(
      fixture.nativeElement.querySelector('.graph1')?.textContent
    ).toContain('Graph1 drawed');
    expect(
      fixture.nativeElement.querySelector('.graph2')?.textContent
    ).toContain('Graph2 drawed');
  });
});
