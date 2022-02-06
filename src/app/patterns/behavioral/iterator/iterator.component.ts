import { Component, OnInit } from '@angular/core';
import { WordsCollection } from './classes/words-collection.class';

@Component({
  selector: 'app-iterator',
  templateUrl: './iterator.component.html',
  styleUrls: ['./iterator.component.scss'],
})
export class IteratorComponent implements OnInit {
  public iteratorText: string = '';
  public reverseIteratorText: string = '';

  constructor() {
    console.clear();
  }

  ngOnInit(): void {
    const collection = new WordsCollection();
    collection.addItems(['test1', 'test2', 'test3']);

    const iterator = collection.getIterator();

    while (iterator.valid()) {
      const next = iterator.next();
      console.log(next);
      this.iteratorText += next + ' ';
    }

    console.log('---');

    const reverseIterator = collection.getReverseIterator();
    while (reverseIterator.valid()) {
      const next = reverseIterator.next();
      console.log(next);
      this.reverseIteratorText += next + ' ';
    }
  }
}
