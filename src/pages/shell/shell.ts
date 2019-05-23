import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Platform, PopoverController } from 'ionic-angular';
import { MenuInicialPage } from "../../pages/menu-inicial/menu-inicial";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DialogMenuPage } from '../dialog-menu/dialog-menu';

@Component({
  selector: 'page-shell',
  templateUrl: 'shell.html',
})
export class ShellPage {
  shellPage: any = MenuInicialPage;

  @ViewChild('shellNav') nav: NavController

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public popoverCtrl: PopoverController
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  presentDialogMenuModal(ev) {

    let popover = this.popoverCtrl.create(DialogMenuPage, {}, {cssClass: "popover-menu"});

    popover.present({
      ev: ev
    });

  }

}
