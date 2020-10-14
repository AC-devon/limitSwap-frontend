import { Component } from '@angular/core';

import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  url: SafeResourceUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
    `https://www.chartex.pro/fullscreen.html?symbol=UNISWAP:LIMIT&timeframe=60`
  );;
  constructor(private domSanitizer: DomSanitizer) {
  }
  iframeTicker(symbol: string): void {
    this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(
      `https://www.chartex.pro/fullscreen.html?symbol=${symbol}:LIMIT&timeframe=60`
      );
      console.log(this.url)
  }
}
