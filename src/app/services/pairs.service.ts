import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PairsService {
  public pairs$ = new BehaviorSubject([]);
  private pairs = [];
  constructor() { 
    
    for (let index = 0; index < 5; index++) {
      const element = {
        symbol: 'BTC' || 'UNISWAP',
        buyPrice: Math.floor(Math.random() * 50),
        sellPrice : Math.floor(Math.random() * 101) + 50,
        id: 'test'
      }
      this.pairs.push(element);
      this.pairs$.next(this.pairs);
    }
  }

  addPair(newPair){
    this.pairs.push(newPair);
    this.pairs$.next(this.pairs);
  }
  removePair(index){
    this.pairs.splice(index, 1);
    this.pairs$.next(this.pairs);
  }
}
