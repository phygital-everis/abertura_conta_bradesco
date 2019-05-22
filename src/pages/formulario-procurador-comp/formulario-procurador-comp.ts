import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ClienteProvider } from "../../providers/cliente/cliente";
import { CadastraSenhaPage } from '../cadastra-senha/cadastra-senha';

@Component({
  selector: 'page-formulario-procurador-comp',
  templateUrl: 'formulario-procurador-comp.html',
})
export class FormularioProcuradorCompPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private cliente: ClienteProvider
    ) {
  }

  ionViewDidLoad() {
    let data = (this.navParams.get('data'));
    let fields = [];
   
    for (let index = 0; index < data.responses[0].textAnnotations.length; index++) {
      fields.push(data.responses[0].textAnnotations[index].description)
    }

    //Endereco
    let enderecoBegin = fields.indexOf("Endereço") > 0 ? fields.indexOf("Endereço") : fields.indexOf("Endereco");
    
    let enderecoEnd = fields.indexOf("Codificação") > 0 ? fields.indexOf("Codificação") : fields.indexOf("Codificacao");
    let enderecoCompleto = '';
    let numeroCasa = '';

    if(enderecoBegin !== -1 && enderecoEnd !== -1){
      for(let i=enderecoBegin+1; i < enderecoEnd; i++) {
        enderecoCompleto += fields[i] + ' ';
      }
    }
    let addressSplit = enderecoCompleto.split(',');
    numeroCasa = addressSplit[1].split(' ')[1];
    enderecoCompleto = addressSplit[0];

    this.cliente.cliente.logradouro = enderecoCompleto;
    this.cliente.cliente.numero = numeroCasa;
    
  }

  goNext() {
    this.navCtrl.push(CadastraSenhaPage);
  }

}
