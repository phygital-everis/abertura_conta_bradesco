import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { VisionProvider } from "../../providers/vision/vision";
import { FormularioPage } from "../../pages/formulario/formulario";
import { HomePage } from '../home/home';
import { BasketOfServicesPage } from '../basket-of-services/basket-of-services';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-capture-doc',
  templateUrl: 'capture-doc.html',
  providers: [VisionProvider]
})
export class CaptureDocPage {

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

      this.photo = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
        + imageData);

      this.presentLoadingOptions();

      this.vision.sendVision(imageData).subscribe((data) => {        
        this.navCtrl.push(FormularioPage, { data: data, tipo: this.tipoDoc });
      });

      
    }, (err) => {
      console.log(err);
      this.presentAlertConfirm();
    });
  }

  public close() {
    console.log('close');
    this.navCtrl.popTo(BasketOfServicesPage);
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
