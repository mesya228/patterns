import { FormConfig } from 'shared/models/form-config';
import { Singleton } from './singleton.class';

export abstract class SingletonForm {
    protected config: FormConfig = {
        controls: [
            {
                type: 'text',
                name: 'time',
                placeholder: 'Input your time',
            }
        ],
        buttons: [
            {title: 'Call me', action: Singleton},
        ]
    };
}