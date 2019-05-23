import { DadosComplementaresPage } from './../pages/dados-complementares/dados-complementares';
import { CapturePicPage } from './../pages/capture-pic/capture-pic';
import { DialogMenuPage } from './../pages/dialog-menu/dialog-menu';
import { Component, ViewChild } from '@angular/core';
import { Platform, PopoverController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ReciboPage } from '../pages/recibo/recibo';
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
  rootPage: any = ReciboPage;

  @ViewChild('appNav') nav: NavController

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public popoverCtrl: PopoverController
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  presentDialogMenuModal(ev) {

    let popover = this.popoverCtrl.create(DialogMenuPage, {}, { cssClass: "popover-menu" });

    popover.present({
      ev: ev
    });

  }
  //TODO
  //remover ao integrar
  goToPic(picType: string, previous: string, next: string, nextData: any, canSkip = true) {
    this.nav.push(CapturePicPage, { tipoFoto: picType, anterior: previous, proxima: next, nextData: nextData, canSkip: canSkip });
  }

}
