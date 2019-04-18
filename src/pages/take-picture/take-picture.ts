import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { CaptureDocPage } from "../../pages/capture-doc/capture-doc";
import { HomePage } from '../home/home';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-take-picture',
  templateUrl: 'take-picture.html'
})
export class TakePicturePage {

  photo:any = ''
  tipoDoc:string
  loading

  constructor(
    private camera: Camera, 
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _sanitizer: DomSanitizer,
    private loadingCtrl: LoadingController,
    private alertController: AlertController) {

  }

  getPhoto(){
    
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetHeight: 600,
      targetWidth: 900
    }

    this.camera.getPicture(options).then((imageData) => {
      
      this.photo = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
      + imageData);

      setTimeout(() => {
        this.presentGoOrBack()
      }, 1000);
             
     
    }, (err) => {
      console.log(err);
      this.presentAlertConfirm();
    });
  }
  

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      title: '<strong>Ops</strong>!!!',
      message: 'Parece que estamos com algum problema! Reinicie o App.',
      buttons: [
        {
          text: 'Reiniciar',
          handler: () => {
            this.navCtrl.setRoot(HomePage);
          }
        }
      ]
    });
    await alert.present();
  }

  async presentGoOrBack() {
    const alert = await this.alertController.create({
      title: '<strong>Foto Tirada</strong>!!!',
      message: 'A foto está boa?',
      buttons: [
        {
          text: 'Confirmar',
          handler: () => {
            this.navCtrl.push(CaptureDocPage);
          }
        }
      ]
    });
    await alert.present();
  }

}


