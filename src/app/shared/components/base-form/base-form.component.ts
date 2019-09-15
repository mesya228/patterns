import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.scss']
})
export class BaseFormComponent implements OnChanges {
  public baseForm: FormGroup;

  @Input() config: any;
  @Input() buildForm$: any;

  @Output() formSubmit: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.config.currentValue && changes.config.currentValue.controls) {
      this.buildFormGroup();
    }
  }

  protected buildFormGroup() {
      this.baseForm = this.formBuilder.group({});
      this.config.controls.forEach(control => {
          this.baseForm.addControl(control.name, new FormControl('', control.validatorsSync));
      });
  }

  public submitForm(action: any = undefined) {
    this.formSubmit.emit({form: this.baseForm, action: action});
  }

}
