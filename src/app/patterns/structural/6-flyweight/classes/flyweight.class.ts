export class Flyweight {
  constructor(private state: any) {}

  public operation(object: string[]): void {
    const s = JSON.stringify(this.state);
    const u = JSON.stringify(object);
    console.log(`Flyweight: Displaying shared (${s}) and unique (${u}) state.`);
  }
}
