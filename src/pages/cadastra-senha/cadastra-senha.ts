import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ReciboPage} from '../recibo/recibo';
import { ToastController } from 'ionic-angular';
import { ClienteProvider } from "../../providers/cliente/cliente";
import {ContratoEletronicoPage} from "../contrato-eletronico/contrato-eletronico";

@Component({
  selector: 'page-cadastra-senha',
  templateUrl: 'cadastra-senha.html',
})
export class CadastraSenhaPage {
  senha1
  senha2
  senhaOk = false

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    private cliente: ClienteProvider

    ) {
  }

  ionViewDidLoad() {
  }

  confereSenha(){
    if (this.senha1 == this.senha2) {
      this.cliente.cliente.senha = this.senha1
      this.goNext()
    }else{
      this.senha1=''
      this.senha2=''
      this.presentToast('senhas não conferem')
    }
  }
  

  goNext(){
    this.navCtrl.push(ContratoEletronicoPage)
  }

  presentToast(msg) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

}
