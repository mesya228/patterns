import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeChildBComponent } from './tree-child-b.component';

describe('TreeChildBComponent', () => {
  let component: TreeChildBComponent;
  let fixture: ComponentFixture<TreeChildBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeChildBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeChildBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
