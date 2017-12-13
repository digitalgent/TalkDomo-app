import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomoPage } from '../domo2/domo2';
import { ModalController, NavParams, ViewController } from 'ionic-angular';
import { ItemSliding, List } from 'ionic-angular';
// import { NgModel } from '@angular/forms';

@Component({
  selector: 'page-lights',
  templateUrl: 'lights.html',
})
export class LightsPage {

  items = [];
  lightcount = 2;
  item = "Light ";

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

    //this.items = [];

  }

  lightstatus() {
    console.log('test')
  }


  godomoSetting() {
    let modal = this.modalCtrl.create(DomoPage);
    modal.present();
   //console.log('knoptest');
    }

    addLight() {
        this.items.push(this.item + [this.lightcount]);
        this.lightcount ++;
    }

  removeItem(item){

    let index = this.items.indexOf(item);
    this.items.splice(item, 1);

  }



}
