import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { Component,ViewChild } from '@angular/core';
import { APIService } from '../../providers/rest/api-service';
import { ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
//import { Camera, CameraPreviewRect, CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera';
//import { CameraPreview, CameraPreviewRect } from 'ionic-native';


//declare var CameraPreview:any;
//@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})


export class SlidesPage {
  @ViewChild(Slides) slides: Slides;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, private api: APIService, public toastCtrl: ToastController) {

    this.userdata = {
      "face": "picture",
      "email": "",
      "firstName": "",
      "lastName": "",
      "password": "",
      "username": ""
    };
  }

  gotoNextSlide0() {
this.slides.slideNext();

  }

  gotoNextSlide() {
    let toast = this.toastCtrl.create({
    message: 'Domo connected!',
    duration: 3000
  });
  toast.present();
    this.slides.slideNext();

  }

  gotoNextSlide2() {
    let toast = this.toastCtrl.create({
    message: 'You have been successfully logged in',
    duration: 3000
  });
  toast.present();
    this.slides.slideNext();

  }


  addUser() {

    let toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000
    });
    toast.present();

    this.api.postUser(this.userdata).subscribe(
      () => console.log('Add user Complete')
    );

    this.slides.slideNext();


  }

  appBegin() {
this.navCtrl.push(HomePage);

  }
//gotoUser(){

  //this.navCtrl.push(toUser);
//  }

  // startCamera() {
  //   //console.log(startcamera)
  //     CameraPreview.startCamera({x: 40, y: 100, width: 80, height: 220, toBack: false, previewDrag: true});
  //   }

}
