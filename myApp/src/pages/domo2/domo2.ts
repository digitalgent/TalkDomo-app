import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { DatePipe } from '@angular/common';


/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-domo',
  templateUrl: 'domo2.html',
})
export class DomoPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController, public alertCtrl: AlertController, public viewCtrl: ViewController) {
  }

  today = Date.now();
  fixedTimezone = '2015-06-15T09:03:01+0900';

  changeName() {
    let prompt = this.alertCtrl.create({
      title: 'Change Name',
      message: "Enter your new Domo name",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log(data);

          }
        }
      ]
    });
    prompt.present();

  }

  changeVoice() {
     console.log('knoptest');
      let alert = this.alertCtrl.create();
      alert.setTitle('Select a mood');

      alert.addInput({
        type: 'radio',
        label: 'Voice1',
        value: 'voice1',
      //  checked: true
      });

      alert.addInput({
        type: 'radio',
        label: 'Voice2',
        value: 'voice2'
      });


      alert.addInput({
        type: 'radio',
        label: 'Voice3',
        value: 'voice3'
      });

      alert.addInput({
        type: 'radio',
        label: 'Voice4',
        value: 'voice4'
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

    showCheckbox() {
       console.log('knoptest');
        let alert = this.alertCtrl.create();
        alert.setTitle('Select a mood?');

        alert.addInput({
          type: 'radio',
          label: 'Sleep',
          value: 'sleep',
        //  checked: true
        });

        alert.addInput({
          type: 'radio',
          label: 'Awake',
          value: 'awake'
        });

        alert.addInput({
          type: 'radio',
          label: 'Angry',
          value: 'angry'
        });

        alert.addInput({
          type: 'radio',
          label: 'Happy',
          value: 'happy'
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

  gotoPrevious() {
    this.viewCtrl.dismiss();
  }


}
