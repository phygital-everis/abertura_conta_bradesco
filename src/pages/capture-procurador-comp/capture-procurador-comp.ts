import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { VisionProvider } from "../../providers/vision/vision";
import { Formulario2Page } from "../../pages/formulario2/formulario2";
import { FormularioProcuradorCompPage } from '../formulario-procurador-comp/formulario-procurador-comp';
import { HomePage } from '../home/home';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-capture-procurador-comp',
  templateUrl: 'capture-procurador-comp.html',
})
export class CaptureProcuradorCompPage {

  photo: any = ''
  tipoDoc: string
  loading

  constructor(
    private camera: Camera,
    public navCtrl: NavController,
    public navParams: NavParams,
    private vision: VisionProvider,
    private _sanitizer: DomSanitizer,
    private loadingCtrl: LoadingController,
    private alertController: AlertController) { }

  getPhoto() {

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
        this.navCtrl.push(FormularioProcuradorCompPage, { data: data });
      });
    }, (err) => {
      console.log(err);
      this.presentAlertConfirm();
    });
  }

  choseType(el) {
    this.tipoDoc = el._elementRef.nativeElement.value
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