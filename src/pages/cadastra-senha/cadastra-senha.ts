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

  //••••••
  senha: string = "";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    private cliente: ClienteProvider

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
