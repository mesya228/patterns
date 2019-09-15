import { State } from "./state";
import { Validators } from '@angular/forms';
import { FormConfig } from '../../../shared/models/form-config';

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
        title: 'Next'
      }
    ],
    view: {
      title: 'Email',
      text: 'Your email'
    }
  }

  public formSubmit(): void {
    console.log('Form submit ConcreteStateA', this.context.form.value);
    this.context.changeState(ConcreteStateB);
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
        title: 'Send'
      }
    ],
    view: {
      title: 'Passwords',
      text: 'Input password and confirm it'
    }
  }

  public formSubmit(): void {
    console.log('Form submit ConcreteStateB', this.context.form.value);
    this.context.changeState(ConcreteStateA);
  }
}
