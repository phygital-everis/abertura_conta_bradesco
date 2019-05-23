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
  vencimentoFatura: string[] = ['01', '05', '08', '10', '12', '13', '15', '17', '20', '25']
  public cards: any[];
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreditCardPage');
    this.cards = this.navParams.get('cards');
  }

  presentDialogMenuModal() {
    let dialogMenuModal = this.modalCtrl.create(DialogMenuPage);
    dialogMenuModal.present();
  }

  creditCardView() {
    let ccModal = this.modalCtrl.create(CreditCardModalPage);
    ccModal.present();
  }

  goBack(): void {
    this.navCtrl.pop();
  }

  removeCard(index): void {
    this.cards.splice(index, 1)
  }

  goNext() {
    this.navCtrl.push(AdditionalCreditCardPage, { cards: this.cards, index: 0 })
  }

}
