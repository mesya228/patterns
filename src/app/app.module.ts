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
} from './patterns';
import { FacadeComponent } from './patterns/structural/facade/facade.component';
import { DecoratorComponent } from './patterns/structural/decorator/decorator.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
