import { State } from './state';
import { FormConfig } from '../../../shared/models/form-config';
import { Subject } from 'rxjs';
import { FormGroup } from '@angular/forms';

export abstract class StateForm {
    protected buildForm$: Subject<any> = new Subject();
    protected form: FormGroup;

    protected state: State;

    protected config: FormConfig;

    protected changeState(NewState): void {
        this.state = new NewState();
        this.state.setContext(this);
        this.config = this.state.config;
        this.buildFormGroup();
    }

    protected abstract buildFormGroup(): void;
}