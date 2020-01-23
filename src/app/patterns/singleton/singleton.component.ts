import { Component } from "@angular/core";

import { SingletonForm } from "./classes/singleton-form.class";

@Component({
  selector: "app-singleton",
  templateUrl: "./singleton.component.html",
  styleUrls: ["./singleton.component.scss"]
})
export class SingletonComponent extends SingletonForm {
  constructor() {
    super();
  }

  public onSubmit({ form, action }) {
    const singleton = action.getInstance();

    singleton.logData(form);
  }
}
