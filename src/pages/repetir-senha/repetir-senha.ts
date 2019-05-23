import { Component } from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {ConfirmaSenhaPage} from "../confirma-senha/confirma-senha";
import {ContratoEletronicoPage} from "../contrato-eletronico/contrato-eletronico";

@Component({
  selector: 'page-repetir-senha',
  templateUrl: 'repetir-senha.html',
})
export class RepetirSenhaPage {

  senha: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController) {
  }


  escolherNumero(numero){

    if(this.senha.length < 6)
      this.senha += numero;

  }

  limpar(){

    this.senha = this.senha.slice(0, -1);

  }

  goNext(){

    if (this.senha == this.navParams.get("senha"))
      this.navCtrl.push(ContratoEletronicoPage);

    else {

      this.senha = "";
      this.presentToast('senha não confere')

    }

  }

  presentToast(msg) {

    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });

    toast.present();

  }

}
