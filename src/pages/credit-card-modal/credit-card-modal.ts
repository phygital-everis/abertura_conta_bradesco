import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OperacaoCanceladaPage } from "../operacao-cancelada/operacao-cancelada";

@Component({
  selector: 'page-credit-card-modal',
  templateUrl: 'credit-card-modal.html',
})
export class CreditCardModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  goToMenuInicial() {
    this.navCtrl.push(OperacaoCanceladaPage)
  }

  goBack() {
    this.navCtrl.pop();
  }

}
