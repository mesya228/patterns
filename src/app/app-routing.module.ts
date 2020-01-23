import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  StateComponent,
  FactoryComponent,
  SingletonComponent,
  BuilderComponent,
  AdapterComponent,
  CommandComponent,
} from './patterns';

const CREATIONAL = [
  {
    path: 'builder',
    component: BuilderComponent
  },
  {
    path: 'factory',
    component: FactoryComponent
  },
  {
    path: 'singleton',
    component: SingletonComponent
  },
];

const SCTUCTURAL = [
  {
    path: 'adapter',
    component: AdapterComponent
  },
];

const BEHAVIORAL = [
  {
    path: 'command',
    component: CommandComponent
  },
  {
    path: 'state',
    component: StateComponent
  },
];

const routes: Routes = [
  ...SCTUCTURAL,
  ...BEHAVIORAL,
  ...CREATIONAL,
  {
    path: '**',
    redirectTo: 'command'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
