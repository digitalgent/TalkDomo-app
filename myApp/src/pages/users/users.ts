import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DomoPage} from '../domo2/domo2';
import { ModalController, NavParams, ViewController } from 'ionic-angular';
import { APIService } from '../../providers/rest/api-service';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  domo = {users: [{first_name: ""}]};
  items = [];
  usercount = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public api: APIService) {

    this.items[0] = this.api.activeUser;

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

    //this.items = [this.domo.users[0].first_name];
    //{{ domo.users[0].first_name }}
  }



  godomoSetting() {
    let modal = this.modalCtrl.create(DomoPage);
    modal.present();
    //console.log('knoptest');
  }

  addUser() {
      //console.log(this.usercount, this.domo.users[this.usercount])
      this.items.push(this.domo.users[this.usercount]);
      this.usercount++;

      if(this.usercount >= this.domo.users.length) this.usercount = 0;
  }

  removeUser(item) {
    
    this.items = this.items.filter(function(el){ return el !== item });
  }
}
