import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { DialogMenuPage } from "../dialog-menu/dialog-menu";

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

}
