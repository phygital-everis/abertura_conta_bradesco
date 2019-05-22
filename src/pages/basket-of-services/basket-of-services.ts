import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { packageComparativePage } from '../package-comparative/package-comparative';
import { packageDetailsPage } from '../package-details/package-details';

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

  public compare(): void {
    this.navCtrl.push(packageComparativePage);
  }

  public details(): void {
    this.navCtrl.push(packageDetailsPage);
  }

}
