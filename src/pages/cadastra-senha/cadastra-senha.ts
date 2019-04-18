import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PlanosPage} from '../planos/planos';

/**
 * Generated class for the CadastraSenhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cadastra-senha',
  templateUrl: 'cadastra-senha.html',
})
export class CadastraSenhaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  goNext(){
    this.navCtrl.push(PlanosPage)
  }

}
