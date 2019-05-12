import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { DialogMenuPage } from "../dialog-menu/dialog-menu";
import { ClientElegivelPage } from "../client-elegivel/client-elegivel";
import { ClientNaoElegivelPage } from "../client-nao-elegivel/client-nao-elegivel"

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
    let int = this.getRandomInt()

    console.log(int);
    

    if (int <5) {
      this.goToElegivelPage()
    }else{
      this.goToNaoElegivelPage()
    }
  }

  goToElegivelPage(){
    this.navCtrl.push(ClientElegivelPage)

  }

  goToNaoElegivelPage(){
    this.navCtrl.push(ClientNaoElegivelPage)

  }

  presentDialogMenuModal() {
    let dialogMenuModal = this.modalCtrl.create(DialogMenuPage);
    dialogMenuModal.present();
  }

  getRandomInt() {
 
    return Math.floor(Math.random() * 10)
}


}
