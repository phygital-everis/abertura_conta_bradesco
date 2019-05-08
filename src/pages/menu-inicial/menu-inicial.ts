import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { CpfPage } from "../cpf/cpf";
import { DialogMenuPage } from "../dialog-menu/dialog-menu";

@Component({
  selector: 'page-menu-inicial',
  templateUrl: 'menu-inicial.html',
})
export class MenuInicialPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController
    ) {
  }

  ionViewDidLoad() {
  }

  goToCpfPage(){
    this.navCtrl.push(CpfPage)
  }

  presentDialogMenuModal() {
    let dialogMenuModal = this.modalCtrl.create(DialogMenuPage);
    dialogMenuModal.present();
  }

}
