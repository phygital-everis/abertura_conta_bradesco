import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ClienteProvider } from "../../providers/cliente/cliente";
import {DadosPreAberturaPage} from "../dados-pre-abertura/dados-pre-abertura";
import {SucessoCadastroSenhaPage} from "../sucesso-cadastro-senha/sucesso-cadastro-senha";
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

    if (Number(this.senha) == this.cliente.cliente.senha)
      this.navCtrl.push(DadosPreAberturaPage);

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
