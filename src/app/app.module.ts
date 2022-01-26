import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  FactoryComponent,
  AbstractFactoryComponent,
  BuilderComponent,
  SingletonComponent,
} from './patterns';
import { PrototypeComponent } from './patterns/4-prototype/prototype.component';

@NgModule({
  declarations: [
    AppComponent,
    FactoryComponent,
    AbstractFactoryComponent,
    BuilderComponent,
    SingletonComponent,
    PrototypeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
