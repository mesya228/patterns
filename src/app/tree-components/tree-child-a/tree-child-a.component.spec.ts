import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeChildAComponent } from './tree-child-a.component';

describe('TreeChildAComponent', () => {
  let component: TreeChildAComponent;
  let fixture: ComponentFixture<TreeChildAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeChildAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeChildAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
