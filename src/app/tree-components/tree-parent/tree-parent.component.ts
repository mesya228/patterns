import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-parent',
  templateUrl: './tree-parent.component.html',
  styleUrls: ['./tree-parent.component.scss'],
})
export class TreeParentComponent implements OnInit {
  public dataA: any = { desc: 'Description A' };
  public nameA: string = 'Child A';

  public dataB: any = { desc: 'Description B' };
  public nameB: string = 'Child B';

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
  }

  public changeAName() {
    this.nameA = this.nameA + ' 1';
  }
  public changeAData() {
    this.dataA.desc = this.dataA.desc + ' 1';
  }
  public replaceAData() {
    this.dataA = { desc: this.dataA.desc + ' 1' };
  }

  public changeBName() {
    this.nameB = this.nameB + ' 1';
  }
  public changeBData() {
    this.dataB.desc = this.dataB.desc + ' 1';
  }
  public replaceBData() {
    this.dataB = { desc: this.dataB.desc + ' 1' };
  }
  public detectChanges() {
    this.cd.detectChanges();
  }
}
