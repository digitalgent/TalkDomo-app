import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Camera, CameraPreviewRect, CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera';
//import { CameraPreview, CameraPreviewRect } from 'ionic-native';


//declare var CameraPreview:any;
//@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})


export class SlidesPage {

  constructor(public modalCtrl: ModalController/*, public cameraPreview: CameraPreview*/) {
  }


  startCamera() {
    //console.log(startcamera)
      CameraPreview.startCamera({x: 40, y: 100, width: 80, height: 220, toBack: false, previewDrag: true});
    }

}
