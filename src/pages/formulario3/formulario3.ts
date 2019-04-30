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

  declaraPep(op){
    console.log(op);
  }

  possuiRelPep(op){
    console.log(op);
  }

  possuiLigPep(op){
    console.log(op);
  }

  residFiscal(op){
    console.log(op);
  }

  relacOrg(op){
    console.log(op);
  }

}
