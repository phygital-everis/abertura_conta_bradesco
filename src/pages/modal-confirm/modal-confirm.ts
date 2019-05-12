import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OperacaoCanceladaPage } from "../operacao-cancelada/operacao-cancelada";


@Component({
  selector: 'page-modal-confirm',
  templateUrl: 'modal-confirm.html',
})
export class ModalConfirmPage {

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
