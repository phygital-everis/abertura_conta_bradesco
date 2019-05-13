import { Component } from '@angular/core';
import { ModalController,NavController, NavParams } from 'ionic-angular';
import { DialogMenuPage } from "../dialog-menu/dialog-menu";
import { PreApprovedCardPage} from "../pre-approved-card/pre-approved-card";


@Component({
  selector: 'page-pre-approved-customer',
  templateUrl: 'pre-approved-customer.html',
})
export class PreApprovedCustomerPage {

  lme: number = 1000;
  chequeEspecial: number = 1000;
  cartaoCredito: number = 1000;
  
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

  goNext(){
    this.navCtrl.push(PreApprovedCardPage)
  }

  noLme(){
    this.lme = 0
  }

  noCheque(){
    this.chequeEspecial = 0
  }

  noCartao(){
    this.cartaoCredito = 0
  }

}
