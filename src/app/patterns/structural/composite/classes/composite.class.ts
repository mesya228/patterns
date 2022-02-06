import { Group } from './group.class';

export class Composite extends Group {
  protected children: Group[] = [];

  public add(group: Group): void {
    this.children.push(group);
    group.setParent(this);
  }

  public remove(group: Group): void {
    const componentIndex = this.children.indexOf(group);
    this.children.splice(componentIndex, 1);

    group.setParent(null);
  }

  public isComposite(): boolean {
    return true;
  }

  public operation(): string {
    const results = [];

    for (const child of this.children) {
      results.push(child.operation());
    }

		console.log(`Branch(${results.join('+')})`);
    return `Branch(${results.join('+')})`;
  }
}
