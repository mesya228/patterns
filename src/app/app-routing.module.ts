import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StateComponent, FactoryComponent } from './patterns';

const routes: Routes = [
  {
    path: 'factory',
    component: FactoryComponent
  },
  {
    path: 'state',
    component: StateComponent
  },
  {
    path: '**',
    redirectTo: 'factory'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
