import { DialogMenuPage } from './../pages/dialog-menu/dialog-menu';
import { Component, ViewChild } from '@angular/core';
import {Platform, PopoverController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { NavController } from 'ionic-angular';

import { PreApprovedCardPage } from '../pages/pre-approved-card/pre-approved-card'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  ngAfterViewInit(): void {
    console.log('Nav: ', this.nav);
    let curr = this.nav.getActive();
    console.log('Current: ', curr);
  }
  rootPage: any = PreApprovedCardPage;

  @ViewChild('appNav') nav: NavController

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
