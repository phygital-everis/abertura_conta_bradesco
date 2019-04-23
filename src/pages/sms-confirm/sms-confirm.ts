import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";

@Component({
  selector: 'page-sms-confirm',
  templateUrl: 'sms-confirm.html',
})
export class SmsConfirmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  goNext(){
    this.navCtrl.push(HomePage)
  }

}
