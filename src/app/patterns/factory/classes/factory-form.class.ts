import { FormConfig } from 'shared/models/form-config';
import { EmailActionCreator, PhoneActionCreator } from './creators.class';

export abstract class FactoryForm {
  protected config: FormConfig = {
    controls: [
      {
        type: 'text',
        name: 'phoneOrEmail',
        placeholder: 'Your phone or email'
      }
    ],
    buttons: [
      { title: 'Call me', action: EmailActionCreator },
      { title: 'Send email', action: PhoneActionCreator }
    ]
  };
}
