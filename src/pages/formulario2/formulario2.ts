import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ClienteProvider } from "../../providers/cliente/cliente";
import { Formulario3Page } from "../formulario3/formulario3";

@Component({
  selector: 'page-formulario2',
  templateUrl: 'formulario2.html',
})
export class Formulario2Page {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private cliente: ClienteProvider
    ) {
  }

  ionViewDidLoad() {
    console.log(this.cliente.cliente);
    
  }

  goNext() {
    this.navCtrl.push(Formulario3Page)
  }

}
