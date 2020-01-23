import { State } from './state.class';
import { FormConfig } from 'shared/models/form-config';

export abstract class StateForm {
    protected state: State;

    protected config: FormConfig;

    protected changeState(NewState): void {
        this.state = new NewState();
        this.state.setContext(this);
        this.config = this.state.config;
    }
}