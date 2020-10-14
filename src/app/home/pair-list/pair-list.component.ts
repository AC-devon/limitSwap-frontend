import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PairsService } from 'src/app/services/pairs.service';
import { NewPairComponent } from '../new-pair/new-pair.component';

@Component({
  selector: 'app-pair-list',
  templateUrl: './pair-list.component.html',
  styleUrls: ['./pair-list.component.scss'],
})
export class PairListComponent implements OnInit {
  @Output() onSelectSymbol = new EventEmitter<string>();
  constructor(public pairsService:PairsService,private popoverController: PopoverController) { }

  ngOnInit() {
  }
  deletePair(index){
    this.pairsService.removePair(index);
  }
  async addPair() {
    const popover = await this.popoverController.create({
      component: NewPairComponent,
      cssClass: "custom-popover",
    });
    return await popover.present();
  }
  viewTrade(symbol) {
    this.onSelectSymbol.emit(symbol);
  }
}
