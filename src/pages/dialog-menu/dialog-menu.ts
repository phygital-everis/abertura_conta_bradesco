import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { MenuInicialPage } from "../menu-inicial/menu-inicial";

@Component({
  selector: 'page-dialog-menu',
  templateUrl: 'dialog-menu.html',
})
export class DialogMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  goToMenu() {
    console.log('Deveria ir ao menu inicial');
    this.navCtrl.setRoot(MenuInicialPage)
  }

  exit() {
    this.navCtrl.popToRoot()
  }

  goBack() {
    this.navCtrl.pop();
  }

}
