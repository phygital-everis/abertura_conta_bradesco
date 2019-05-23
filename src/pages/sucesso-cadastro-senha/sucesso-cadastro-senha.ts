import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ReciboPage} from "../recibo/recibo";
import {ContratoEletronicoPage} from "../contrato-eletronico/contrato-eletronico";

@Component({
  selector: 'page-sucesso-cadastro-senha',
  templateUrl: 'sucesso-cadastro-senha.html',
})
export class SucessoCadastroSenhaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  avancar(){

    this.navCtrl.push(ContratoEletronicoPage);

  }



}
