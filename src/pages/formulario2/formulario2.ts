import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Cliente } from "../../models/cliente.model";
import { LocalStorageProvider } from "../../providers/local-storage/local-storage";
import { Formulario3Page } from "../formulario3/formulario3";

@Component({
  selector: 'page-formulario2',
  templateUrl: 'formulario2.html',
})
export class Formulario2Page {

  public cliente = new Cliente()

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  goNext() {
    this.navCtrl.push(Formulario3Page)
  }

}
