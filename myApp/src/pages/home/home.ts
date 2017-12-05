import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomoPage } from '../domo2/domo2';
import { UsersPage } from '../users/users';
import { ModalController, NavParams, ViewController } from 'ionic-angular';
//import { List } from 'ionic-angular';
//import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
// @ViewChild(List) list: List;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.navCtrl = navCtrl
  }


  godomoSetting() {
    let modal = this.modalCtrl.create(DomoPage);
    modal.present();
    //this.navCtrl.push(DomoPage);
    //console.log('knoptest');
  }



}
