export interface IStrategy {
  calculateRoute(data: string[]): string[];
}
