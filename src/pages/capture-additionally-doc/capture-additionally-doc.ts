import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { VisionProvider } from "../../providers/vision/vision";
import { HomePage } from '../home/home';
import { FormularioFromAdditionallyDocPage } from '../formulario-from-additionally-doc/formulario-from-additionally-doc';

@Component({
  selector: 'page-capture-additionally-doc',
  templateUrl: 'capture-additionally-doc.html',
})
export class CaptureAdditionallyDocPage {

  photo: any = ''
  tipoDoc: string
  loading

  constructor(
    private camera: Camera,
    public navCtrl: NavController,
    public navParams: NavParams,
    private vision: VisionProvider,
    private loadingCtrl: LoadingController,
    private alertController: AlertController
  ) { }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CaptureAdditionallyDocPage');
  }

  getPhoto() {
    if (!this.tipoDoc) return

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetHeight: 600,
      targetWidth: 900
    }

    this.camera.getPicture(options).then((imageData) => {

      this.presentLoadingOptions();

      this.vision.sendVision(imageData).subscribe((data) => {
        this.navCtrl.push(FormularioFromAdditionallyDocPage, { data: data, tipo: this.tipoDoc });
      });


    }, (err) => {
      console.log(err);
      this.presentAlertConfirm();
    });
  }

  choseType(el) {
    this.tipoDoc = el;
  }

  async presentLoadingOptions() {
    const loading = await this.loadingCtrl.create({
      spinner: null,
      duration: 8000,
      content: 'Estamos processando as suas informações, aguarde!'
    });
    return await loading.present();
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


}
