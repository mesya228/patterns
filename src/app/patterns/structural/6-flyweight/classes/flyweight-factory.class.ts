import { Flyweight } from './flyweight.class';

export class FlyweightFactory {
  private flyweights: { [key: string]: Flyweight } = {};

  constructor(private initFlyweights: string[][]) {
    initFlyweights.forEach((state) => {
      this.flyweights[this.getKey(state)] = new Flyweight(state);
    });
  }

  public getFlyweight(flyweight: string[]): Flyweight {
    const key = this.getKey(flyweight);

    if (!(key in this.flyweights)) {
      console.log(
        "FlyweightFactory: Can't find a flyweight, creating new one."
      );
      this.flyweights[key] = new Flyweight(flyweight);
    } else {
      console.log('FlyweightFactory: Reusing existing flyweight.');
    }

    return this.flyweights[key];
  }

  public listFlyweights(): void {
    const count = Object.keys(this.flyweights).length;

    console.log(`\nFlyweightFactory: I have ${count} flyweights:`);
    for (const key in this.flyweights) {
      console.log(key);
    }
  }

  private getKey(state: string[]): string {
    return state.join('_');
  }
}
