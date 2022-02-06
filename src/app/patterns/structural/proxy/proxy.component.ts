import { Component, OnInit } from '@angular/core';
import { ProxyService } from './classes/proxy-service.service';
import { Proxy } from './classes/proxy.class';

@Component({
  selector: 'app-proxy',
  templateUrl: './proxy.component.html',
  styleUrls: ['./proxy.component.scss'],
})
export class ProxyComponent implements OnInit {
  public proxyServiceText: string;
  public proxyText: string;

  constructor() {
    console.clear();
  }

  ngOnInit(): void {
    const proxyService = new ProxyService();
    this.proxyServiceText = proxyService.request();

    const proxy = new Proxy(proxyService);
    this.proxyText = proxy.request();
  }
}
