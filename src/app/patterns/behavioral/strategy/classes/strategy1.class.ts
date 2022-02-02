import { IStrategy } from '../interfaces/strategy.interface';

export class Strategy1 implements IStrategy {
  public calculateRoute(data: string[]): string[] {
    return data.sort();
  }
}
