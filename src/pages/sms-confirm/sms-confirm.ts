import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ReciboPage } from "../recibo/recibo";
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-sms-confirm',
  templateUrl: 'sms-confirm.html',
})
export class SmsConfirmPage {

  codigoInput
  codigoSent


  constructor(
    public toastCtrl: ToastController,
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
  }

  ionViewDidLoad() {
    this.sendCode()
  }

  sendCode(){
    this.codigoSent = this.geraCodigo()
    let msg = "use o código " + this.codigoSent + " para continuar"

    setTimeout(() => {
      this.presentToast(msg)
    }, 1000);
  }

  goNext(){
    this.navCtrl.push(ReciboPage)
  }

  confereCodigo(){
  if (this.codigoSent == this.codigoInput) {
    this.goNext()
  }else{
    this.codigoInput = ''
    this.presentToast('código não confere')
    this.sendCode()

  }
  }

  presentToast(msg) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 5000,
      position:'top'
    });
    toast.present();
  }

  geraCodigo(){
    return Math.floor(Math.random() * 9999 + 1000)
  }

}
