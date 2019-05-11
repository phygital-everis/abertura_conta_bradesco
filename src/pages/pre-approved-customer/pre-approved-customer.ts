import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PreApprovedCustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pre-approved-customer',
  templateUrl: 'pre-approved-customer.html',
})
export class PreApprovedCustomerPage {

  lme: number = 0;
  chequeEspecial: number = 0;
  cartaoCredito: number = 0;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  increasceValue() {

  }

}
