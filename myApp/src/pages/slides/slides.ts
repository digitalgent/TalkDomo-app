import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { Component,ViewChild } from '@angular/core';
import { APIService } from '../../providers/rest/api-service';
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

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, private api: APIService) {

    this.userdata = {
      "face": "picture",
      "email": "",
      "firstName": "",
      "lastName": "",
      "password": "",
      "username": ""
    };
  }

  gotoNextSlide() { this.slides.slideNext(); }

  addUser() {

    this.api.postUser(this.userdata).subscribe(
      () => console.log('Add user Complete')
    );


  }
//gotoUser(){

  //this.navCtrl.push(toUser);
//  }

  // startCamera() {
  //   //console.log(startcamera)
  //     CameraPreview.startCamera({x: 40, y: 100, width: 80, height: 220, toBack: false, previewDrag: true});
  //   }

}
