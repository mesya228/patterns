export abstract class Group {
  protected parent: Group | null;

  public setParent(parent: Group | null) {
    this.parent = parent;
  }

  public getParent(): Group | null {
    return this.parent;
  }

  public add(component: Group): void {}

  public remove(component: Group): void {}

  public isComposite(): boolean {
    return false;
  }

  public abstract operation(): string;
}
