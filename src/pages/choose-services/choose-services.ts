import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BasketOfServicesPage } from '../basket-of-services/basket-of-services';

/**
 * Generated class for the ChooseServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-choose-services',
  templateUrl: 'choose-services.html',
})
export class ChooseServicesPage {

  service: number;
  account = {};
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseServicesPage');
  }

  public selectService(event): void {
    console.log(event);
    this.service = event;
  }

  public goNext(): void {
    this.navCtrl.push(BasketOfServicesPage);
  }

}
