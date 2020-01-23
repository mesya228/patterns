import { Component } from '@angular/core';
import { StateForm, ConcreteStateA } from './classes';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent extends StateForm {

  constructor() {
      super();
      this.changeState(ConcreteStateA);
  }

  public formSubmit(payload: any) {
      this.state.formSubmit(payload);
  }

  onSubmit(payload: any) {
    this.formSubmit(payload);
  }
}