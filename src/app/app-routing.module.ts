import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AbstractFactoryComponent,
  BuilderComponent,
  FactoryComponent,
  PrototypeComponent,
  SingletonComponent,
} from './patterns';

const routes: Routes = [
  {
    path: 'factory',
    component: FactoryComponent,
  },
  {
    path: 'abstract',
    component: AbstractFactoryComponent,
  },
  {
    path: 'builder',
    component: BuilderComponent,
  },
  {
    path: 'prototype',
    component: PrototypeComponent,
  },
  {
    path: 'singleton',
    component: SingletonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
