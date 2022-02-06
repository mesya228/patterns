import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AbstractFactoryComponent,
  AdapterComponent,
  BuilderComponent,
  FacadeComponent,
  FactoryComponent,
  PrototypeComponent,
  SingletonComponent,
  BridgeComponent,
  DecoratorComponent,
  FlyweightComponent,
  ProxyComponent,
  CompositeComponent,
  ChainComponent,
  IteratorComponent,
  CommandComponent,
  StateComponent,
  StrategyComponent,
  MediatorComponent,
  MementoComponent,
  TemplateComponent,
  VisitorComponent,
} from './patterns';

const routes: Routes = [
  // Creational
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
  // Structural
  {
    path: 'adapter',
    component: AdapterComponent,
  },
  {
    path: 'bridge',
    component: BridgeComponent,
  },
  {
    path: 'facade',
    component: FacadeComponent,
  },
  {
    path: 'decorator',
    component: DecoratorComponent,
  },
  {
    path: 'flyweight',
    component: FlyweightComponent,
  },
  {
    path: 'proxy',
    component: ProxyComponent,
  },
  {
    path: 'composite',
    component: CompositeComponent,
  },
  // Behavioral
  {
    path: 'chain',
    component: ChainComponent,
  },
  {
    path: 'iterator',
    component: IteratorComponent,
  },
  {
    path: 'command',
    component: CommandComponent,
  },
  {
    path: 'state',
    component: StateComponent,
  },
  {
    path: 'strategy',
    component: StrategyComponent,
  },
  {
    path: 'template',
    component: TemplateComponent,
  },
  {
    path: 'mediator',
    component: MediatorComponent,
  },
  {
    path: 'memento',
    component: MementoComponent,
  },
  {
    path: 'visitor',
    component: VisitorComponent,
  },
  {
    path: '**',
    redirectTo: 'factory',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
