import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SmsConfirmPage } from "../sms-confirm/sms-confirm";

@Component({
  selector: 'page-confirma-senha',
  templateUrl: 'confirma-senha.html',
})
export class ConfirmaSenhaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  goNext(){
    this.navCtrl.push(SmsConfirmPage)
  }

}
