import { Builder } from '../interfaces/builder.interface';

export class Director {
  private builder: Builder;

  /**
   * Директор работает с любым экземпляром строителя, который передаётся ему
   * клиентским кодом. Таким образом, клиентский код может изменить конечный
   * тип вновь собираемого продукта.
   */
  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public getData(payload): void {
    this.builder.getData(payload);
  }

  public buildUsers(payload): void {
    this.builder.getData(payload);
    this.builder.addFullName();
    this.builder.addIsUserAdult();
  }
}
