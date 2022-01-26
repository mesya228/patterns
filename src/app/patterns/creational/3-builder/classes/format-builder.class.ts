import { IBuilder } from '../interfaces/builder.interface';

export class FormatBuilder implements IBuilder {
  private resultString: string;
  private defaultString: string;

  constructor(string: string) {
    this.defaultString = this.resultString = string;
  }

  public getResult(): any {
    const result = this.resultString;
    this.reset();
    return result;
  }

  public reset(): void {
    this.resultString = this.defaultString;
  }

  public formatSpaces(): void {
    this.resultString.replace('', '');
  }

  public formatLinks(): void {
    this.resultString.replace('', '');
  }

  public censorObscene(): void {
    this.resultString.replace('', '');
  }
}
