import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  FactoryComponent,
  AbstractFactoryComponent,
  BuilderComponent,
  SingletonComponent,
  PrototypeComponent,
  AdapterComponent,
  BridgeComponent,
  FacadeComponent,
  DecoratorComponent,
  FlyweightComponent,
  ProxyComponent,
  CompositeComponent,
  ChainComponent,
  IteratorComponent,
  CommandComponent,
  StrategyComponent,
  StateComponent,
  TemplateComponent,
  MediatorComponent,
  MementoComponent,
  VisitorComponent,
} from './patterns';

import {
  TreeParentComponent,
  TreeChildAComponent,
  TreeChildBComponent,
} from './tree-components';

@NgModule({
  declarations: [
    AppComponent,
    FactoryComponent,
    AbstractFactoryComponent,
    BuilderComponent,
    SingletonComponent,
    PrototypeComponent,
    AdapterComponent,
    BridgeComponent,
    FacadeComponent,
    DecoratorComponent,
    FlyweightComponent,
    ProxyComponent,
    CompositeComponent,
    ChainComponent,
    IteratorComponent,
    CommandComponent,
    StrategyComponent,
    StateComponent,
    TemplateComponent,
    MediatorComponent,
    MementoComponent,
    VisitorComponent,
    TreeParentComponent,
    TreeChildAComponent,
    TreeChildBComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
