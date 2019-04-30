import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { CadastraSenhaPage } from "../cadastra-senha/cadastra-senha";
import { HomePage } from '../home/home';
import { DomSanitizer } from '@angular/platform-browser';
import { LocalStorageProvider } from "../../providers/local-storage/local-storage";
import { FirebaseServiceProvider } from "../../providers/firebase-service/firebase-service";
@Component({
  selector: 'page-take-picture',
  templateUrl: 'take-picture.html',
  providers: [LocalStorageProvider]
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
    private alertController: AlertController,
    private localstorage: LocalStorageProvider,
    private fbService: FirebaseServiceProvider

    ) {

  }

  ionViewDidLoad() {
    this.localstorage.clearAll()
  }

  getPhoto(){
    
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetHeight: 600,
      targetWidth: 600
    }

    this.camera.getPicture(options).then((imageData) => {
      
      this.photo = 'data:image/jpeg;base64,' + imageData;

      this.localstorage.addItem('foto',this.photo).then(
        response=>{
          setTimeout(() => {
            this.presentGoOrBack()
          }, 1000);
      })

      this.fbService.upLoadToStorage(this.photo)
             
     
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
            this.navCtrl.push(CadastraSenhaPage);
          }
        }
      ]
    });
    await alert.present();
  }

}


