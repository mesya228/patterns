export abstract class Template {
  public templateMethod(): void {
    this.baseOperation1();
    this.operation1();
    this.baseOperation2();

    this.hook1();
    this.operation2();
    this.baseOperation3();
    this.hook2();
  }

  protected baseOperation1(): void {
    console.log('AbstractClass says: I am doing the bulk of the work');
  }

  protected baseOperation2(): void {
    console.log(
      'AbstractClass says: But I let subclasses override some operations'
    );
  }

  protected baseOperation3(): void {
    console.log(
      'AbstractClass says: But I am doing the bulk of the work anyway'
    );
  }

  protected abstract operation1(): void;

  protected abstract operation2(): void;

  /**
   * Это «хуки». Подклассы могут переопределять их, но это не обязательно,
   * поскольку у хуков уже есть стандартная (но пустая) реализация. Хуки
   * предоставляют дополнительные точки расширения в некоторых критических
   * местах алгоритма.
   */
  protected hook1(): void {}
  protected hook2(): void {}
}
