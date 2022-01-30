import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public readonly patternTypes = [
    {
      title: 'Creational',
      patterns: [
        { title: 'factory' },
        { title: 'abstract' },
        { title: 'builder' },
        { title: 'prototype' },
        { title: 'singleton' },
      ],
    },
    { title: 'structural', patterns: [
      { title: 'adapter' },
      { title: 'bridge' },
      { title: 'composite' },
      { title: 'decorator' },
      { title: 'facade' },
      { title: 'flyweight' },
      { title: 'proxy' },
    ] },
    { title: 'behavioral', patterns: [{ title: '' }] },
  ];
}
