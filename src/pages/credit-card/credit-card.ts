import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { DialogMenuPage } from "../dialog-menu/dialog-menu";
import { CreditCardModalPage } from '../credit-card-modal/credit-card-modal';
import { AdditionalCreditCardPage } from '../additional-credit-card/additional-credit-card';
import { ModalConfirmPage } from "../modal-confirm/modal-confirm";

@Component({
  selector: 'page-credit-card',
  templateUrl: 'credit-card.html',
})
export class CreditCardPage {

  vencimentoFatura: string[] = ['01','05','08','10','12','13','15','17','20','25'];
  valor = 1500;
  cards: any[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {

    this.cards = this.navParams.get('cards');

    let vlCartao = this.valor / this.cards.length;

    this.cards.forEach((card) => {

      card.valor = vlCartao;

    });

  }

  mudarValor(index, valorCartao) {

    let valorRestante = (this.valor - valorCartao) / (this.cards.length - 1);

    this.cards.forEach((card, i) => {

      if(index != i)
        card.valor = valorRestante;

    });

  }

  presentDialogMenuModal() {
    let dialogMenuModal = this.modalCtrl.create(DialogMenuPage);
    dialogMenuModal.present();
  }

  creditCardView() {
    let ccModal = this.modalCtrl.create(CreditCardModalPage);
    ccModal.present();
  }

  goBack():void {
    this.navCtrl.pop();
  }

  removeCard(index):void {
    this.cards.splice(index,1)
  }

  goNext(){
    this.navCtrl.push(AdditionalCreditCardPage, {cards:this.cards, index:0})
  }

  validar() {

    if(this.cards) {

      let valido = true;

      this.cards.forEach((card) => {

        if (card.diaFatura == -1)
          valido = false;

      });

      return valido;

    }

    else
      return false;

  }

}
