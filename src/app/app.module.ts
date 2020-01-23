import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BaseFormComponent } from './shared/components/base-form/base-form.component';
import {
  StateComponent,
  FactoryComponent,
  SingletonComponent,
  BuilderComponent,
  AdapterComponent,
  CommandComponent,
} from './patterns';

@NgModule({
  declarations: [
    AppComponent,
    BaseFormComponent,
    StateComponent,
    FactoryComponent,
    SingletonComponent,
    BuilderComponent,
    AdapterComponent,
    CommandComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
