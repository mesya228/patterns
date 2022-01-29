import { Service1 } from './service1.class';
import { Service2 } from './service2.class';

export class Adapter extends Service1 {
  constructor(private service: Service2) {
    super();
  }

  public request(): string {
    const res = this.service.request().split('').reverse().join('');
    console.log('Adapter', res);
    return res;
  }
}
