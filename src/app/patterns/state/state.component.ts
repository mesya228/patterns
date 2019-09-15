import { Component } from '@angular/core';
import { StateForm } from 'src/app/patterns/state/models/state-form';
import { ConcreteStateA } from 'src/app/patterns/state/models/states';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent extends StateForm {

  constructor(private formBuilder: FormBuilder) {
      super();
      this.changeState(ConcreteStateA);
  }

  public formSubmit() {
      this.state.formSubmit();
  }

  protected buildFormGroup(): void {
    this.form = this.formBuilder.group({});
    this.config.controls.forEach(control => {
        this.form.addControl(control.name, new FormControl('', control.validatorsSync));
    });
  }
}