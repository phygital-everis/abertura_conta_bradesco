import { DialogMenuPage } from './../pages/dialog-menu/dialog-menu';
import { Component, OnInit, ViewChild } from '@angular/core';
import {Platform, NavParams, PopoverController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { NavController } from 'ionic-angular';
import {DadosPreAberturaPage} from "../pages/dados-pre-abertura/dados-pre-abertura";
import {ReciboPage} from "../pages/recibo/recibo";
import { FormularioPage } from '../pages/formulario/formulario';
import { Formulario2Page } from '../pages/formulario2/formulario2';
import { AccountTypePage } from "../pages/account-type/account-type";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  ngAfterViewInit(): void {
    console.log('Nav: ', this.nav);
    let curr = this.nav.getActive();
    console.log('Current: ', curr);
  }
  rootPage: any = AccountTypePage;

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
