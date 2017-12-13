import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomoPage } from '../domo2/domo2';
import { ModalController, NavParams, ViewController } from 'ionic-angular';
import { ItemSliding, List } from 'ionic-angular';
import { APIService } from '../../providers/rest/api-service';
// import { NgModel } from '@angular/forms';

@Component({
  selector: 'page-lights',
  templateUrl: 'lights.html',
})
export class LightsPage {

  public apps = {
    "apptype": "",
    "name": "",
    "status": ""
  };

  items = [];
  lightcount = 2;
  item = "Light ";

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public api: APIService) {

    //this.items = [];

  }

  lightstatus() {
    console.log('test')
    if(this.toggleStatus == true){
    this.apps.status = "on";
    this.api.putApps(this.apps).subscribe(
      () => console.log('light status changed')
    );
  }
    else {

      this.apps.status = "off";
      this.api.putApps(this.apps).subscribe(
        () => console.log('light status changed')
      );
    }
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
