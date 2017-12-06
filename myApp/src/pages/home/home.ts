import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomoPage } from '../domo2/domo2';
import { UsersPage } from '../users/users';
import { ModalController, NavParams, ViewController } from 'ionic-angular';
import { SlidesPage } from '../slides/slides';
import { APIService } from '../../providers/rest/api-service';
//import {Http} from '@angular/http';

//import { List } from 'ionic-angular';
//import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
// @ViewChild(List) list: List;

  domo = {name: "loading"};

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private api: APIService) {
    this.navCtrl = navCtrl

    this.api.getDomo(1).subscribe(
      data => {
          this.domo = data;
          console.log(data);
      },
      err => {
          console.log(err);
      },
      () => console.log('Domo get Complete')
    );
  }




  godomoSetting() {
    let modal = this.modalCtrl.create(DomoPage);
    modal.present();
    //this.navCtrl.push(DomoPage);
    //console.log('knoptest');
  }

  testSlides() {
this.navCtrl.push(SlidesPage);

  }



}
