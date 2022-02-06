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
    { title: 'behavioral', patterns: [
      { title: 'chain' },
      { title: 'command' },
      { title: 'iterator' },
      { title: 'mediator' },
      { title: 'observer' },
      { title: 'strategy' },
      { title: 'memento' },
      { title: 'template' },
      { title: 'visitor' },
    ] },
  ];
}
