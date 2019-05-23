import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CpfPage } from '../cpf/cpf';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
import { ClienteProvider } from "./../../providers/cliente/cliente";

@Component({
  selector: 'page-account-type',
  templateUrl: 'account-type.html',
})
export class AccountTypePage {
  
  accType: string = '';
  moveType: string = '';
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public localStorage: LocalStorageProvider,
    public cliente: ClienteProvider
    ) {
  }

  ionViewDidLoad() {
  }

  goToNextPage() {
    console.log('tipo de conta: '+this.cliente.cliente.tipoDeConta);

    console.log(this.accType);
    console.log(this.moveType);
    this.localStorage.addItem('accountType', this.accType);
    this.localStorage.addItem('moveType', this.moveType);
    
    this.navCtrl.push(CpfPage);
  }


}
