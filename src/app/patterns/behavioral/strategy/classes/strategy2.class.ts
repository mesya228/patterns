import { IStrategy } from '../interfaces/strategy.interface';

export class Strategy2 implements IStrategy {
  public calculateRoute(data: string[]): string[] {
    return data.reverse();
  }
}
