import { Component } from '@angular/core';
import { FactoryForm } from './classes/factory-form.class';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.scss']
})
export class FactoryComponent extends FactoryForm {
  public onSubmit({form, action}) {
    const factory = new action();
    
    console.log(form);
    console.log(factory.someOperation());
  }
}
