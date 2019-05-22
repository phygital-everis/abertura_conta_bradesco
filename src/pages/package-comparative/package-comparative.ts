import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { BasketOfServicesPage } from '../basket-of-services/basket-of-services';

@Component({
  selector: 'page-package-comparative',
  templateUrl: 'package-comparative.html',
})
export class packageComparativePage {
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
  }

  public close() {
    this.navCtrl.popTo(BasketOfServicesPage);
  }
}
