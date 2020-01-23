import { FormConfig } from 'shared/models/form-config';

export abstract class AdapterForm {
  protected config: FormConfig = {
    controls: [
      {
        type: 'email',
        name: 'email',
        placeholder: 'E-mail'
      }
    ],
    buttons: [
      { title: 'Send', action: null },
    ]
  };
}
