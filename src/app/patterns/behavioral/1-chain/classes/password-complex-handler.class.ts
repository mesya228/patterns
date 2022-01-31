import { IHandleRequest } from '../interfaces/handler.interface';
import { AbstractHandler } from './abstract-handler.class';

export class PasswordComplexHandler extends AbstractHandler {
  public handle(request: IHandleRequest): boolean {
    if (request.type === 'Complex') {
      return !!request.content.match(/^[a-z]+[A-Z]+$/);
    }

    return super.handle(request);
  }
}
