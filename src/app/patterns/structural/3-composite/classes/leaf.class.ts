import { Group } from './group.class';

export class Leaf extends Group {
  public operation(): string {
    return 'Leaf';
  }
}
