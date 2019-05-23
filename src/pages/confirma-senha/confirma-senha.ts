import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ClienteProvider } from "../../providers/cliente/cliente";
import {DadosPreAberturaPage} from "../dados-pre-abertura/dados-pre-abertura";
@Component({
  selector: 'page-confirma-senha',
  templateUrl: 'confirma-senha.html',
})
export class ConfirmaSenhaPage {
  //••••••
  senha: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,

  ) {
  }


  escolherNumero(numero){

    if(this.senha.length < 6)
      this.senha += numero;

  }

  limpar(){

    this.senha = this.senha.slice(0, -1);

  }

  goNext(){
    this.navCtrl.push(DadosPreAberturaPage, {senha: this.senha})
  }

  presentToast(msg) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

}
