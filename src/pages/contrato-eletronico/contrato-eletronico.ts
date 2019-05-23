import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { HomePage } from "../home/home";
import { IContratoEletronico } from "./contrato.interface";
import {ReciboPage} from "../recibo/recibo";

@Component({
  selector: "page-contrato-eletronico",
  templateUrl: "contrato-eletronico.html"
})
export class ContratoEletronicoPage {
  data: IContratoEletronico;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // HACK - REMOVER NA VERSÃO FINAL
    this.data = this.mockData();
  }

  ionViewDidLoad() {
    // this.data = this.navParams.get("data");
  }


  goNext() {
    this.navCtrl.push(ReciboPage);
  }

  mockData(): IContratoEletronico {
    return {
      id: 1,
      nome: "João Antonio Pires da Silva",
      cpf: "XXXXXXXXXX-XX",
      rg: "XXXXXXXX-X",
      cartoes: [
        {
          id: 1,
          nomeCartao: "Cartão de crédito internacional Elo",
          limite: 1000.0,
          nomePessoasCartaoAdicional: ['Teresa Cristina Gomes']
        },
        {
          id: 2,
          nomeCartao: "Cartão de crédito internacional Visa",
          limite: 500.0,
          nomePessoasCartaoAdicional: ['Teresa Cristina Gomes']
        }
      ],
      cestas: [{ id: 1, nomeServico: "Expresso 5", valor: 25.2 }]
    };
  }
}
