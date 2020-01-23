import { Component } from '@angular/core';
import { AdapterForm, Adapter } from './classes';

@Component({
  selector: 'app-adapter',
  templateUrl: './adapter.component.html',
  styleUrls: ['./adapter.component.scss']
})
export class AdapterComponent extends AdapterForm {
  constructor() {
    super();
  }

  public onSubmit({ form }) {
    var request1 = this.getObjRequest();
    var request2 = this.getArrRequest();

    const adaptedRequest2 = new Adapter(request2).getData();

    const result = { ...request1, ...adaptedRequest2 };
    console.log(result);
  }

  private getObjRequest() {
    return {
      id1: {
        name: 'Sergey 1',
        surname: 'Melnykov 1',
        id: 1
      },
      id2: {
        name: 'Sergey 2',
        surname: 'Melnykov 2',
        id: 2
      }
    };
  }

  private getArrRequest() {
    return [
      {
        name: 'Sergey 3',
        surname: 'Melnykov 3',
        id: 3
      },
      {
        name: 'Sergey 4',
        surname: 'Melnykov 4',
        id: 4
      }
    ];
  }
}
