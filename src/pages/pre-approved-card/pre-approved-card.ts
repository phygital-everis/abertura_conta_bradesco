import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { DialogMenuPage } from "../dialog-menu/dialog-menu";
import { CaptureDocPage } from "../capture-doc/capture-doc";

@Component({
  selector: 'page-pre-approved-card',
  templateUrl: 'pre-approved-card.html',
})
export class PreApprovedCardPage {

  public cartao = [false,false,false,false]

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

  selectCard(card){

    this.cartao[card] = !this.cartao[card] 

  }

  goNext(){
    this.navCtrl.push(CaptureDocPage)
  }

}
