export class Prototype {
  public primitive: string;
  public date: Date;
  public circularReference: any;
  public deepObj: {};

  public clone() {
    const clone = Object.create(this);

    clone.date = Object.create(this.date);

    clone.circularReference = {
      ...this.circularReference,
      prototype: { ...this },
    };

    clone.deepObj = JSON.parse(JSON.stringify(this.deepObj));

    return clone;
  }
}
