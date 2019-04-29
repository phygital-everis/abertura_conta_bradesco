import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SmsConfirmPage } from "../sms-confirm/sms-confirm";
import { ToastController } from 'ionic-angular';
import { ClienteProvider } from "../../providers/cliente/cliente";
@Component({
  selector: 'page-confirma-senha',
  templateUrl: 'confirma-senha.html',
})
export class ConfirmaSenhaPage {
  senha1

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    private cliente: ClienteProvider
    ) {
  }

  ionViewDidLoad() {
  }

  confereSenha() {
    if (this.senha1 == this.cliente.cliente.senha) {
      this.goNext()
      
    } else {
      this.senha1=''
      this.presentToast('senha não confere')
    }
  }

  goNext(){
    this.navCtrl.push(SmsConfirmPage)
  }

  presentToast(msg) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }


}
