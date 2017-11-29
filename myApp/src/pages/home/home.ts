import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DomoPage} from '../domo/domo'
//import { List } from 'ionic-angular';
//import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
// @ViewChild(List) list: List;

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl

  }

  godomoSetting() {
    this.navCtrl.push(DomoPage);
   console.log('knoptest');
   //this.list.enableSlidingItems(true);
 }

  //openModal() {

  //}
}
