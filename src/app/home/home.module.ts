import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PairListComponent } from './pair-list/pair-list.component';
import { NewPairComponent } from './new-pair/new-pair.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,PairListComponent,NewPairComponent],
  entryComponents: [NewPairComponent]
})
export class HomePageModule {}
