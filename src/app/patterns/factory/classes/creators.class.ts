import { Product } from "../interfaces/product.interface";
import { Creator } from "./creator.class";
import { EmailAction, PhoneAction } from "./actions.class";

export class EmailActionCreator extends Creator {
  public factoryMethod(): Product {
    return new EmailAction();
  }
}

export class PhoneActionCreator extends Creator {
  public factoryMethod(): Product {
    return new PhoneAction();
  }
}
