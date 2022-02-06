import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { CareTaker } from './classes/caretaker.class';
import { Originator } from './classes/originator.class';

@Component({
  selector: 'app-memento',
  templateUrl: './memento.component.html',
  styleUrls: ['./memento.component.scss'],
})
export class MementoComponent implements OnInit {
  public form: FormGroup;
  private originator: Originator;
  private caretaker: CareTaker;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      text: new FormControl(''),
    });

    this.originator = new Originator('');
    this.caretaker = new CareTaker(this.originator);

    this.subscribeToForm();
  }

  public undoChanges() {
    this.caretaker.undo();
    const state = this.originator.getState();
    console.log(state);
    this.form.get('text').setValue(state, { emitEvent: false });
  }

  private subscribeToForm() {
    this.form.valueChanges.pipe(debounceTime(500)).subscribe((form) => {
      this.originator.editState(form.text);
      this.caretaker.backup();
    });
  }
}
