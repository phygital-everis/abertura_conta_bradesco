import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Cliente } from "../../models/cliente.model";
import { LocalStorageProvider } from "../../providers/local-storage/local-storage";
import { CaptureCompEndPage } from "../capture-comp-end/capture-comp-end";

@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {

  public cliente = new Cliente()

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private localstorage: LocalStorageProvider) {
  }

  ionViewDidLoad() {
   this.cliente.nomeCompleto = "teste"
    console.log(this.cliente)
     
  }

  goNext(){
    this.navCtrl.push(CaptureCompEndPage)
  }

}
