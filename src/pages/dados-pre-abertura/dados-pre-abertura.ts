import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ReciboPage} from "../recibo/recibo";

@Component({
  selector: 'page-dados-pre-abertura',
  templateUrl: 'dados-pre-abertura.html',
})
export class DadosPreAberturaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  avancar(){

    this.navCtrl.push(ReciboPage);

  }

}
