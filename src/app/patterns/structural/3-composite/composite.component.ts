import { Component, OnInit } from '@angular/core';
import { Composite } from './classes/composite.class';
import { Leaf } from './classes/leaf.class';

@Component({
  selector: 'app-composite',
  templateUrl: './composite.component.html',
  styleUrls: ['./composite.component.scss'],
})
export class CompositeComponent implements OnInit {
  public compositeText: string;

  constructor() {}

  ngOnInit(): void {
    const tree = new Composite();
    const branches = [new Composite(), new Composite()];
    branches[0].add(new Leaf());
    branches[0].add(new Leaf());
    branches[1].add(new Leaf());

    branches.forEach((branch) => {
      tree.add(branch);
    });

    this.compositeText = tree.operation();
  }
}
