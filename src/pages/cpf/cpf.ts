import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { DialogMenuPage } from "../dialog-menu/dialog-menu";
import { ClientElegivelPage } from "../client-elegivel/client-elegivel";

@Component({
  selector: 'page-cpf',
  templateUrl: 'cpf.html',
})
export class CpfPage {

  cpf
  cpfOk = false
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
  }

  validaCpf(){
    this.goToNextPage()
  }

  goToNextPage(){
    this.navCtrl.push(ClientElegivelPage)
  }

  presentDialogMenuModal() {
    let dialogMenuModal = this.modalCtrl.create(DialogMenuPage);
    dialogMenuModal.present();
  }


}
