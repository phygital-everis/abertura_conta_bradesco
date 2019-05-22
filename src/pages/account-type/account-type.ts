import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CpfPage } from '../cpf/cpf';

/**
 * Generated class for the AccountTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-account-type',
  templateUrl: 'account-type.html',
})
export class AccountTypePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountTypePage');
  }

  goToNextPage() {
    this.navCtrl.push(CpfPage);
  }

}
