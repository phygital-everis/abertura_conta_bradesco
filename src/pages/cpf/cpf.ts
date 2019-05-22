import { ValidaCpfProvider } from './../../providers/valida-cpf/valida-cpf';
import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { DialogMenuPage } from "../dialog-menu/dialog-menu";
import { ClientElegivelPage } from "../client-elegivel/client-elegivel";
import { ClientNaoElegivelPage } from "../client-nao-elegivel/client-nao-elegivel"
import { SessionHelper } from '../../providers/session-helper/session-helper';

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
    public modalCtrl: ModalController,
    private cpfSvc: ValidaCpfProvider,
    private sessionSvc: SessionHelper
  ) {
  }

  ionViewDidLoad() {
  }

  validaCpf() {
    if (this.cpfSvc.validaCPF(this.cpf)) {
      this.sessionSvc.createSession(this.cpf);
      this.goToElegivelPage()
    } else {
      this.goToNaoElegivelPage()
    }
  }

  goToElegivelPage() {
    this.navCtrl.push(ClientElegivelPage)

  }

  goToNaoElegivelPage() {
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
