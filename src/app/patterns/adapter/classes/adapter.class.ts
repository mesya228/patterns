export class Adapter {
  private adaptedData: any;

  constructor(data: any) {
    this.adaptData(data);
  }

  private adaptData(data) {
    this.adaptedData = data.reduce((obj, dataItem) => {
      obj['id' + dataItem.id] = dataItem;
      return obj;
    }, {});
  }

  public getData() {
    return this.adaptedData;
  }
}
