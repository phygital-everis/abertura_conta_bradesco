import { Component } from '@angular/core';
import { NavController, NavParams, App, ViewController } from 'ionic-angular';
import { ShellPage } from '../shell/shell';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-dialog-menu',
  templateUrl: 'dialog-menu.html',
})
export class DialogMenuPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public appCtrl: App) {
  }

  goToMenu() {
    this.viewCtrl.dismiss();
    this.appCtrl.getRootNav().push(ShellPage);
  }

  exit() {
    this.viewCtrl.dismiss();
    this.appCtrl.getRootNav().push(HomePage);
  }

  goBack() {
    this.viewCtrl.dismiss();
  }

}
