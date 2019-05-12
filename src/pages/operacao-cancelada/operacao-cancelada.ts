import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuInicialPage } from "../menu-inicial/menu-inicial";


@Component({
  selector: 'page-operacao-cancelada',
  templateUrl: 'operacao-cancelada.html',
})
export class OperacaoCanceladaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  goToMenuInicial() {
    this.navCtrl.push(MenuInicialPage)
  }

}
