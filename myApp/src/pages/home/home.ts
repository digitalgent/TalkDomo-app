import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { List } from 'ionic-angular';
//import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
// @ViewChild(List) list: List;

  constructor(public navCtrl: NavController) {


  }

  openModal() {
   console.log('knoptest');
   //this.list.enableSlidingItems(true);
 }

  //openModal() {

  //}
}
