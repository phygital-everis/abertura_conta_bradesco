import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BasketOfServicesPage } from '../basket-of-services/basket-of-services';
import { CaptureCompEndPage } from '../capture-comp-end/capture-comp-end';

/**
 * Generated class for the DadosDoDocumentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-dados-do-documento',
  templateUrl: 'dados-do-documento.html',
})
export class DadosDoDocumentoPage {
  service: number;
  account = {};

  button1: boolean = false;
  button2: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DadosDoDocumentoPage');
  }

  goNext(){    
    this.navCtrl.push(CaptureCompEndPage)
  }

}
