import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { APIService } from '../../providers/rest/api-service';

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

  public domo = {
    "name": "",
    "voice": "",
    "emotion": ""
  };

  public voice = "Voice1";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController, public alertCtrl: AlertController, public viewCtrl: ViewController, private api: APIService) {

      this.domo = this.api.activeDomo;

      this.api.getDomo(1).subscribe(
        data => {
            //this.domo = data;
            console.log(data);
            console.log("test");
        },
        err => {
            console.log(err);
        },
        () => console.log('Domo get Complete')
      );
  }

  today = Date.now();
  fixedTimezone = '2015-06-15T09:03:01+0900';

  sendApi() {

    this.api.putDomo(this.domo).subscribe(
      () => console.log('Name changed')
    );
  }

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
            this.domo.name = data.name;
            this.sendApi();
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
          this.voice = data;
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

            this.domo.emotion = data;
            this.sendApi();
          }
        });
        alert.present();
      }

  gotoPrevious() {
    this.viewCtrl.dismiss();
  }


}
