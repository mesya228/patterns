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
  selector: 'app-tree-child-a',
  templateUrl: './tree-child-a.component.html',
  styleUrls: ['./tree-child-a.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('updateView', [
      state(
        'false',
        style({
          'border-color': '#a6e6a6',
          'border-width': '1px',
        })
      ),
      state(
        'true',
        style({
          'border-color': '#38e038',
          'border-width': '3px',
        })
      ),
      transition('* <=> *', animate('300ms ease-in')),
    ]),
  ],
})
export class TreeChildAComponent implements OnInit, OnChanges {
  @Input() public data: any;
  @Input() public name: string;

  public updateView: boolean;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('A', changes);
    this.updateView = true;
  }

  public updateChild() {
    this.cd.markForCheck();
    this.cd.detectChanges();
  }

  public animationDone() {
    this.updateView = false;
  }
}
