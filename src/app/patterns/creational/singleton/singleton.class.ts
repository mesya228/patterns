export class Singleton {
  private static instance: Singleton;

  constructor() {
    console.clear();
  }

  public static getInstance(): Singleton {
    if (!this.instance) {
      this.instance = new Singleton();
    }

    return this.instance;
  }
}
