export interface IHandler {
  setNext(handler: IHandler): IHandler;

  handle(request: IHandleRequest): boolean;
}

export interface IHandleRequest {
  type: string;
  content: any;
  handled?: string | null;
}