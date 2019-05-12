import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OperacaoCanceladaPage } from "../operacao-cancelada/operacao-cancelada";

@Component({
  selector: 'page-client-nao-elegivel',
  templateUrl: 'client-nao-elegivel.html',
})
export class ClientNaoElegivelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  goToMenuInicial(){
    this.navCtrl.push(OperacaoCanceladaPage)
  }

}
