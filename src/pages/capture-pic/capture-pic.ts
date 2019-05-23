import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FormularioPage } from '../formulario/formulario';
import { HomePage } from '../home/home';
import { timestamp } from 'rxjs/operator/timestamp';

@Component({
  selector: 'page-capture-pic',
  templateUrl: 'capture-pic.html',
})
export class CapturePicPage {


  allowSkip = true;
  private tipoFoto: string;
  private next: string;
  private previous: string;
  private nextData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private camera: Camera, private alertController: AlertController) {
  }

  ionViewDidLoad() {
    this.tipoFoto = (this.navParams.get('tipoFoto'));
    this.allowSkip = (this.navParams.get('canSkip'));
    this.next = (this.navParams.get('proxima'));
    this.previous = (this.navParams.get('anterior'));
    this.nextData = (this.navParams.get('nextData'));
    console.log('nextData', this.nextData);
    console.log('next')
  }

  getPhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetHeight: 600,
      targetWidth: 900
    };

    this.camera.getPicture(options).then((imageData) => {
      this.goToNext(this.nextData);
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

  public close() {
    if (this.previous) {
      this.navCtrl.popTo(this.previous);
    } else {
      this.navCtrl.popTo('MenuInicialPage');
    }
  }

  goToNext(data?: any) {
    if (this.next && this.next == 'ComprovanteDeRenda') {
      this.navCtrl.push(CapturePicPage, this.nextData);
    } else {
      this.navCtrl.popTo('MenuInicialPage', data);
    }
  }
}
