import { ProxyService } from './proxy-service.service';

export class Proxy {
  private proxyService: ProxyService;

  constructor(service: ProxyService) {
    this.proxyService = service;
  }

  public request(): string {
    if (this.checkAccess()) {
      this.logAccess();
      return `Proxy class pass data to ${this.proxyService.request()}`;
    }

    return '';
  }

  private checkAccess(): boolean {
    console.log('Proxy: Checking access prior to firing a real request.');

    return true;
  }

  private logAccess(): void {
    console.log('Proxy: Logging the time of request.');
  }
}
