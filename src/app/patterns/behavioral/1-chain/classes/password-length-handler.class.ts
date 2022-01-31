import { IHandleRequest } from '../interfaces/handler.interface';
import { AbstractHandler } from './abstract-handler.class';

export class PasswordLengthHandler extends AbstractHandler {
  public handle(request: IHandleRequest): boolean {
    if (request.type === 'Length') {
      return request.content.length > 6;
    }

    return super.handle(request);
  }
}
