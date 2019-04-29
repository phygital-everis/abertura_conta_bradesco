import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CaptureCompEndPage } from "../capture-comp-end/capture-comp-end";
import { ClienteProvider } from "../../providers/cliente/cliente";

@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private cliente: ClienteProvider
  ) {
  }

  ionViewDidLoad() {
    /* let data = (this.navParams.get('data'));

    let fields = [];
   
    for (let index = 0; index < data.responses[0].textAnnotations.length; index++) {
      fields.push(data.responses[0].textAnnotations[index].description)
    }    

    console.log(fields);
    
   
    this.cliente.cliente.nomeCompleto = fields[17] + " " + fields[18] + " " + fields[19] + " " + fields[20];
    this.cliente.cliente.cpf = fields[33] + " " + fields[34] + " " + fields[35] + " " + fields[36] + " " + fields[37] + " " + fields[38] + " " + fields[39];
     */
     
  }

  goNext(){
   
    this.navCtrl.push(CaptureCompEndPage)
  }

}
