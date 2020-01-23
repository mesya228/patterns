import { FormConfig } from 'shared/models/form-config';

export abstract class CommandForm {
  protected config: FormConfig = {
    controls: [
      {
        type: 'text',
        name: 'report',
        placeholder: 'Your report'
      }
    ],
    buttons: [
      { title: 'Save', action: null },
    ]
  };
}
