import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BasketOfServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-basket-of-services',
  templateUrl: 'basket-of-services.html',
})
export class BasketOfServicesPage {


  plan: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {  }

  checkAnswer() {
    console.log(this.plan);
  }

}
