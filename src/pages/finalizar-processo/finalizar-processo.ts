import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";

@Component({
  selector: 'page-finalizar-processo',
  templateUrl: 'finalizar-processo.html',
})
export class FinalizarProcessoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  avancar(){

    this.navCtrl.setRoot(HomePage);

  }

}
