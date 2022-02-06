import { Service1 } from './service1.service';
import { Service2 } from './service2.service';

export class Facade {
  protected service1: Service1;
  protected service2: Service2;

  constructor(service1?: Service1, service2?: Service2) {
    this.service1 = service1 || new Service1();
    this.service2 = service2 || new Service2();
    console.log(this);
  }

  public getResult(): string {
    let result = 'Facade initializes subsystems:\n';
    result += this.service1.operation1();
    result += this.service2.operation1();
    result += 'Facade orders subsystems to perform the action:\n';
    result += this.service1.operationN();
    result += this.service2.operationZ();

		console.log(result);
    return result;
  }
}
