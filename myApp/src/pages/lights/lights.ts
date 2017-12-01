import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomoPage } from '../domo2/domo2';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { ItemSliding, List } from 'ionic-angular';
// import { NgModel } from '@angular/forms';

@Component({
  selector: 'page-lights',
  templateUrl: 'lights.html',
})
export class LightsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

    this.items = ["Foo", "Bar"];

  }


  godomoSetting() {
    let modal = this.modalCtrl.create(DomoPage);
    modal.present();
   //console.log('knoptest');
    }

  removeItem(item){

    let index = this.items.indexOf(item);
    this.items.splice(item, 1);

  }



}
