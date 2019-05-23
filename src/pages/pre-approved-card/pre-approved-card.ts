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
      limite: 0
    },
    {
      nome: 'Elo Plus',
      bandeira: 'assets/imgs/elo-logo.png',
      limite: 0
    },
    {
      nome: 'Internacional Elo',
      bandeira: 'assets/imgs/elo-logo.png',
      limite: 0
    },
    {
      nome: 'Internacional Visa',
      bandeira: 'assets/imgs/visa-logo.png',
      limite: 0
    }
  ]
  public cartao = [false,false,false,false]
  public pushCards = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
  }

  presentDialogMenuModal() {
    let dialogMenuModal = this.modalCtrl.create(DialogMenuPage);
    dialogMenuModal.present();
  }

  selectCard(card,index){
    this.cartao[index] = !this.cartao[index] 
    if (this.cartao[index] == true) {
      this.pushCards.push(card)
    } else {
      this.pushCards.splice(this.pushCards.indexOf(card), 1);
    }
  }

  goNext(){
    this.navCtrl.push(CreditCardPage, {cards:this.pushCards})
  }

  goBack():void {
    this.navCtrl.pop();
  }

}
