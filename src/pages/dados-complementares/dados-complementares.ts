import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-dados-complementares',
  templateUrl: 'dados-complementares.html',
})
export class DadosComplementaresPage {

  listaTipoReferencia: Array<any>;
  viewModel: DadosComplementaresModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.listaTipoReferencia = [{ id: 'comercial', ds: 'Comercial' }, { id: 'pessoal', ds: 'Pessoal' }, { id: 'bancaria', ds: 'Bancária' }];
    this.viewModel = new DadosComplementaresModel();
  }

  clientIsHasPep(isHas: boolean) {
    this.viewModel.clientPep = isHas;
  }
  clientIsHasPubAgent(isHas: boolean) {
    this.viewModel.clientIsAgent = isHas;
  }
}

export class DadosComplementaresModel {
  tipoReferencia1: string;
  tipoReferencia2: string;
  clientPep: boolean;
  clientIsAgent: boolean;
  referenciaBancaria1 = new ReferenciaBancariaModel();
  referenciaGenerica1 = new ReferenciaGenericaModel();
  referenciaBancaria2 = new ReferenciaBancariaModel();
  referenciaGenerica2 = new ReferenciaGenericaModel();
}
export class ReferenciaBancariaModel {
  nomeBanco: string;
  nomeAgencia: string;
  codigoAgencia: string;
  numeroAgencia: string;
  contaDigito: string;
}
export class ReferenciaGenericaModel {
  nomeReferencia: string;
  numeroReferencia: string;
}
