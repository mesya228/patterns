import { IHandler, IHandleRequest } from '../interfaces';

export abstract class AbstractHandler implements IHandler {
  private nextHandler: IHandler;

  public setNext(handler: IHandler): IHandler {
    this.nextHandler = handler;

    return handler;
  }

  public handle(request: IHandleRequest): boolean {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }

    return null;
  }
}
