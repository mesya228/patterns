import { IHandleRequest } from '../interfaces/handler.interface';
import { AbstractHandler } from './abstract-handler.class';

export class PasswordHackHandler extends AbstractHandler {
  private lastLogins: string[] = [];

  public handle(request: IHandleRequest): boolean {
    this.lastLogins.push(request.content.login);

    if (request.type === 'Hack') {
      return (
        this.lastLogins.filter((login) => login.match(request.content.pass)).length <
        5
      );
    }

    return super.handle(request);
  }
}
