import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { CpfPage } from "../cpf/cpf";
import { DialogMenuPage } from "../dialog-menu/dialog-menu";
import { BasketOfServicesPage } from "../basket-of-services/basket-of-services";
import { AccountTypePage } from '../account-type/account-type';
import { ChooseServicesPage } from '../choose-services/choose-services';
@Component({
  selector: 'page-menu-inicial',
  templateUrl: 'menu-inicial.html',
})
export class MenuInicialPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController
    ) {  }

  ionViewDidLoad() {
  
  }

  goToCpfPage(){
    this.navCtrl.push(AccountTypePage);
    //this.navCtrl.push(BasketOfServicesPage)
    //this.navCtrl.push(AccountTypePage)
    
  }

  presentDialogMenuModal() {
    let dialogMenuModal = this.modalCtrl.create(DialogMenuPage);
    dialogMenuModal.present();
  }

}
