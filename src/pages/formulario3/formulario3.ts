import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlanosPage } from '../planos/planos';
import { ClienteProvider } from "../../providers/cliente/cliente";


@Component({
  selector: 'page-formulario3',
  templateUrl: 'formulario3.html',
})
export class Formulario3Page {

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
    this.navCtrl.push(PlanosPage)
  }

}
