import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DomoPage} from '../domo/domo';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  godomoSetting() {
    let modal = this.modalCtrl.create(DomoPage);
    modal.present();
    //console.log('knoptest');
  }

}
