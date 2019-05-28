import { ValidaCpfProvider } from './../../providers/valida-cpf/valida-cpf';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ClientElegivelPage } from "../client-elegivel/client-elegivel";
import { ClientNaoElegivelPage } from "../client-nao-elegivel/client-nao-elegivel"
import { SessionHelper } from '../../providers/session-helper/session-helper';

@Component({
  selector: 'page-cpf',
  templateUrl: 'cpf.html',
})
export class CpfPage {

  cpf: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
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


  getRandomInt() {

    return Math.floor(Math.random() * 10)
  }


}
