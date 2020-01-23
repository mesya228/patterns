import { ValidatorFn } from '@angular/forms';

export abstract class FormConfig {
    public controls?: {
        name: string;
        type: string;
        placeholder: string;
        validatorsSync?: ValidatorFn[];
    }[];
    public buttons?: {
        title: string;
        action?: any;
    }[];
    public view?: {
        title: string;
        text: string;
    };
}