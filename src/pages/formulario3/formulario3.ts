import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CadastraSenhaPage } from "../cadastra-senha/cadastra-senha";
import { Cliente } from "../../models/cliente.model";


@Component({
  selector: 'page-formulario3',
  templateUrl: 'formulario3.html',
})
export class Formulario3Page {

  public cliente = new Cliente()

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }
  goNext() {
    this.navCtrl.push(CadastraSenhaPage)
  }

}
