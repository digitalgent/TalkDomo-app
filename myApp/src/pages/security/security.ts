import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DomoPage} from '../domo2/domo2';
import { ModalController, NavParams, ViewController } from 'ionic-angular';
import { APIService } from '../../providers/rest/api-service';

/**
 * Generated class for the SecurityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-security',
  templateUrl: 'security.html',
})
export class SecurityPage {

  public apps2 = {
    "apptype": "",
    "name": "",
    "status": ""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public api: APIService) {
  }

  secstatus() {
    console.log('test')
    if(this.toggleStatus == true){
    this.apps2.status = "on";
    this.api.putApps2(this.apps2).subscribe(
      () => console.log('light status changed')
    );
  }
    else {

      this.apps2.status = "off";
      this.api.putApps2(this.apps2).subscribe(
        () => console.log('light status changed')
      );
    }
  }

  godomoSetting() {
    let modal = this.modalCtrl.create(DomoPage);
    modal.present();
    //console.log('knoptest');
  }

}
