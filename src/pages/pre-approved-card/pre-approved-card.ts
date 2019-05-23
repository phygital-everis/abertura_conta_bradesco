import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { DialogMenuPage } from "../dialog-menu/dialog-menu";
import { CreditCardPage } from "../credit-card/credit-card";

@Component({
  selector: 'page-pre-approved-card',
  templateUrl: 'pre-approved-card.html',
})
export class PreApprovedCardPage {

  public cards: any[] = [
    {
      nome: 'Função Crédito Elo',
      bandeira: 'assets/imgs/elo-logo.png',
      selecionado: false,
    },
    {
      nome: 'Elo Plus',
      bandeira: 'assets/imgs/elo-logo.png',
      selecionado: false,
    },
    {
      nome: 'Internacional Elo',
      bandeira: 'assets/imgs/elo-logo.png',
      selecionado: false,
    },
    {
      nome: 'Internacional Visa',
      bandeira: 'assets/imgs/visa-logo.png',
      selecionado: false,
    }
  ];

  public cartoesSelecionados = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
  }

  presentDialogMenuModal() {
    let dialogMenuModal = this.modalCtrl.create(DialogMenuPage);
    dialogMenuModal.present();
  }

  selectCard(cartaoSelecionado, index){

    let indexSelecionado = this.cartoesSelecionados.findIndex(cartao => JSON.stringify(cartaoSelecionado) == JSON.stringify(cartao));

    if(indexSelecionado > -1){

      this.cartoesSelecionados.splice(indexSelecionado, 1);

    }

    else {

      if(this.cartoesSelecionados.length == 2) {

        let apagado = this.cartoesSelecionados.shift();

        let indexApagado = this.cards.findIndex(cartao => JSON.stringify(apagado) == JSON.stringify(cartao));

        this.cards[indexApagado].selecionado = false;

      }

      this.cartoesSelecionados.push(cartaoSelecionado);

    }

    this.cards[index].selecionado = !this.cards[index].selecionado;
    
  }

  goNext(){
    this.navCtrl.push(CreditCardPage, {cards: this.cartoesSelecionados})
  }

  goBack():void {
    this.navCtrl.pop();
  }

}
