import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';



//@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {

  constructor(public modalCtrl: ModalController) {
  }
  

}
