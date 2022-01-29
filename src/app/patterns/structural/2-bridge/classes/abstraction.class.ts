import { IImplementation } from '../interfaces';

export class Abstraction {
  constructor(private implementation: IImplementation) {}

  public operation(): string {
    const result = this.implementation.operationImplementation();
		console.log(result);

    return `Abstraction: Base operation with:\n${result}`;
  }
}
