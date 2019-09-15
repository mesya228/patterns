import { Component } from '@angular/core';
import { FactoryForm } from './models/factory-form';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.scss']
})
export class FactoryComponent extends FactoryForm {
  someOperation(creator) {
    new creator();
  }

  public onSubmit(formSubmitPayload) {
    console.log(formSubmitPayload);
  }
}
