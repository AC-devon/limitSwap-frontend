import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { PairsService } from 'src/app/services/pairs.service';

@Component({
  selector: 'app-new-pair',
  templateUrl: './new-pair.component.html',
  styleUrls: ['./new-pair.component.scss'],
})
export class NewPairComponent implements OnInit {
  newPairForm: FormGroup;
  constructor(private fb: FormBuilder,private pairsService:PairsService, private popoverController: PopoverController ) {
    this.newPairForm = this.fb.group({
      symbol: ["", [Validators.required]],
      buyPrice: ["", [Validators.required]],
      sellPrice: ["", [Validators.required]],
      id: ["", [Validators.required]],
    });
  }

  ngOnInit() {}
  async submitForm(){
    // console.log(this.newPairForm.value)
    this.pairsService.addPair(this.newPairForm.value);
        // close popover
        try {
          const element = await this.popoverController.getTop();
          if (element) {
            element.dismiss();
            return;
          }
        } catch (error) {}
  }
}
