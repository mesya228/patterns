import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
} from './patterns';
import { TemplateComponent } from './patterns/behavioral/template/template.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
