import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-domo',
  templateUrl: 'domo.html',
})
export class DomoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }
  

  showCheckbox() {
     console.log('knoptest');
      let alert = this.alertCtrl.create();
      alert.setTitle('Which Mood do you want?');

      alert.addInput({
        type: 'checkbox',
        label: 'Sleep',
        value: 'sleep',
        checked: true
      });

      alert.addInput({
        type: 'checkbox',
        label: 'Awake',
        value: 'awake'
      });

      alert.addButton('Cancel');
      alert.addButton({
        text: 'Ok',
        handler: data => {
          console.log('Checkbox data:', data);
          this.testCheckboxOpen = false;
          this.testCheckboxResult = data;
        }
      });
      alert.present();
    }




}
