import { NgModule } from '@angular/core';
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
} from './patterns';
import { VisitorComponent } from './patterns/behavioral/visitor/visitor.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
