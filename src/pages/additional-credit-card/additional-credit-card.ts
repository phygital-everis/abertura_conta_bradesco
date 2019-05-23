import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { DialogMenuPage } from "../dialog-menu/dialog-menu";
import { ChooseServicesPage } from '../choose-services/choose-services';

@Component({
  selector: 'page-additional-credit-card',
  templateUrl: 'additional-credit-card.html',
})
export class AdditionalCreditCardPage {
  public cards: any[];
  public card: any;
  public index: number;
  public additionals = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdditionalCreditCardPage');
    this.cards = this.navParams.get('cards');
    this.index = this.navParams.get('index');
    this.card = this.cards[this.index];
    console.log(this.index)
  }

  presentDialogMenuModal() {
    let dialogMenuModal = this.modalCtrl.create(DialogMenuPage);
    dialogMenuModal.present();
  }

  addCard():void {
    this.additionals.push({nome:"",nascimento:"",cpf:"",seguro:false})
  }

  removeCard(index):void {
    this.additionals.splice(index,1);
  }

  goBack():void {
    this.navCtrl.pop();
  }

  goNext(){
    if (this.index < this.cards.length - 1){
      this.navCtrl.push(AdditionalCreditCardPage, {cards:this.cards,index:this.index + 1})
    } else {
      this.navCtrl.push(ChooseServicesPage)
    }
  }

}
