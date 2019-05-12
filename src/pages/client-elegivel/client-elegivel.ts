import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { DialogMenuPage } from "../dialog-menu/dialog-menu";
import { ModalConfirmPage } from "../modal-confirm/modal-confirm";

@Component({
  selector: 'page-client-elegivel',
  templateUrl: 'client-elegivel.html',
})
export class ClientElegivelPage {

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

  presentConfirmModal(){
    let dialogMenuModal = this.modalCtrl.create(ModalConfirmPage);
    dialogMenuModal.present();
  }

  

}
