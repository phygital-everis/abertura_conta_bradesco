import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CpfPage } from '../cpf/cpf';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';

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
  
  accType: string = '';
  moveType: string = '';
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public localStorage: LocalStorageProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountTypePage');
  }

  goToNextPage() {
    console.log(this.accType);
    console.log(this.moveType);
    this.localStorage.addItem('accountType', this.accType);
    this.localStorage.addItem('moveType', this.moveType);
    
    this.navCtrl.push(CpfPage);
  }

  goBack():void {
    this.navCtrl.pop();
  }

}
