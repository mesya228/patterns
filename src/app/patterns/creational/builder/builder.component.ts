import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormatBuilder } from './classes/format-builder.class';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
})
export class BuilderComponent implements OnInit {
  public formattedString: string = '';

  constructor() {
    console.clear();
  }

  ngOnInit(): void {
    const builder = new FormatBuilder('test');
    builder.formatSpaces();
    builder.formatLinks();

    if (environment.production) {
      builder.censorObscene();
    }

    this.formattedString = builder.getResult();
  }
}
