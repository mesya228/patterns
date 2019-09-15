import { FormConfig } from '../../../shared/models/form-config';

export abstract class FactoryForm {
    protected config: FormConfig = {
        buttons: [
            {title: 'Call me', action: 'test'},
            {title: 'Send email', action: 'test'},
        ]
    };
}