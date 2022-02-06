import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-tree-child-b',
  templateUrl: './tree-child-b.component.html',
  styleUrls: ['./tree-child-b.component.scss'],
  animations: [
    trigger('updateView', [
      state(
        'false',
        style({
          'border-color': '#e6a6a6',
          'border-width': '1px',
        })
      ),
      state(
        'true',
        style({
          'border-color': '#e64646',
          'border-width': '3px',
        })
      ),
      transition('* <=> *', animate('300ms ease-in')),
    ]),
  ],
})
export class TreeChildBComponent implements OnInit, OnChanges {
  @Input() public data: any;
  @Input() public name: string;

  public updateView: boolean;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('B', changes);
    this.updateView = true;
  }

  public updateChild() {
    this.cd.markForCheck();
    this.cd.detectChanges();
  }

  public animationDone() {
    debugger;
    this.updateView = false;
  }
}
