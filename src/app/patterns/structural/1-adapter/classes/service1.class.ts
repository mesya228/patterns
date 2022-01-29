export class Service1 {
  public request(): string {
    const res = "Target: The default target's behavior.";

    console.log('Service1', res);
    return res;
  }
}
