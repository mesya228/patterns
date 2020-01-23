import { Component } from '@angular/core';

import { Director, BuilderForm, UsersBuilder } from './classes';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent extends BuilderForm {
  constructor() {
    super();
  }

  public onSubmit({ form }) {
    this.handleRequest(this.getRequest());
  }

  private getRequest() {
    return {
      data: [
        {
          name: 'Vasiliy',
          surname: 'Pupkin',
          email: 'vasya@gmail.com',
          age: 13
        },
        {
          name: 'Elena',
          surname: 'Golovach',
          email: 'elenag@gmail.com',
          age: 77
        }
      ]
    };
  }

  private handleRequest(payload) {
    const director = new Director();
    const builder = new UsersBuilder();
    director.setBuilder(builder);

    director.getData(payload);
    console.log(builder.getUsers());
    debugger;

    director.buildUsers(payload);
    console.log(builder.getUsers());
  }
}
