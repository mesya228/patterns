import { IIterator } from '../interfaces/iterator.interface';
import { WordsCollection } from './words-collection.class';

export class AlphabetOrderIterator implements IIterator<string> {
  private collection: WordsCollection;

  private position = 0;
  private reverse = false;

  constructor(collection: WordsCollection, isReverse = false) {
    this.collection = collection;
    this.reverse = isReverse;

    if (isReverse) {
      this.position = collection.getCount() - 1;
    }
  }

  public next(): string {
    const item = this.collection.getItems()[this.position];
    this.position += this.reverse ? -1 : 1;
    return item;
  }

  public key(): number {
    return this.position;
  }

  public current(): string {
    return this.collection.getItems()[this.position];
  }

  public rewind() {
    this.position = this.reverse ? this.collection.getCount() - 1 : 0;
  }

  public valid(): boolean {
    if (this.reverse) {
      return this.position >= 0;
    }

    return this.position < this.collection.getCount();
  }
}
