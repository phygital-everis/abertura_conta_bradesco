import { DialogMenuPage } from './../pages/dialog-menu/dialog-menu';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform, ModalController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  ngAfterViewInit(): void {
    console.log('Nav: ', this.nav);
    let curr = this.nav.getActive();
    console.log('Current: ', curr);
  }
  rootPage: any = HomePage;

  @ViewChild('appNav') nav: NavController

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private modalCtrl: ModalController
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  presentDialogMenuModal() {
    let dialogMenuModal = this.modalCtrl.create(DialogMenuPage);
    dialogMenuModal.present();
  }


}