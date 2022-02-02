import { IIterator } from '../interfaces/iterator.interface';
import { AlphabetOrderIterator } from './alphabet-order-iterator.class';

export class WordsCollection {
  private items: string[] = [];

  public getItems(): string[] {
    return this.items;
  }

  public getCount(): number {
    return this.items.length;
  }

  public addItems(items: string[]): void {
    this.items = items;
  }

  public addItem(item: string): void {
    this.items.push(item);
  }

  public getIterator(): IIterator<string> {
    return new AlphabetOrderIterator(this);
  }

  public getReverseIterator(): IIterator<string> {
    return new AlphabetOrderIterator(this, true);
  }
}
