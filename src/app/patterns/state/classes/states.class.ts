import { State } from "./state.class";
import { Validators } from '@angular/forms';
import { FormConfig } from 'shared/models/form-config';

export class ConcreteStateA extends State {
  public config: FormConfig = {
    controls: [
      {
        name: 'email',
        type: 'email',
        placeholder: 'Email',
        validatorsSync: [Validators.required]
      }
    ],
    buttons: [
      {
        title: 'Next',
        action: ConcreteStateB,
      }
    ],
    view: {
      title: 'Email',
      text: 'Your email'
    }
  }

  public formSubmit(payload: any): void {
    console.log('Form submit ConcreteStateA', payload.form);
    this.context.changeState(payload.action);
  }
}

export class ConcreteStateB extends State {
  public config = {
    controls: [
      {
        name: 'password',
        type: 'password',
        placeholder: 'Password',
        validatorsSync: [Validators.required]
      },
      {
        name: 'passwordConfirm',
        type: 'password',
        placeholder: 'Confirm Password',
        validatorsSync: [Validators.required]
      }
    ],
    buttons: [
      {
        title: 'Send',
        action: ConcreteStateA,
      }
    ],
    view: {
      title: 'Passwords',
      text: 'Input password and confirm it'
    }
  }

  public formSubmit(payload: any): void {
    console.log('Form submit ConcreteStateB', payload.form);
    this.context.changeState(payload.action);
  }
}
