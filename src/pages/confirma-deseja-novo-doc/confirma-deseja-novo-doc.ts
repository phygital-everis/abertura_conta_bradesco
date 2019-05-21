import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page } from 'ionic-angular/umd/navigation/nav-util';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-confirma-deseja-novo-doc',
  templateUrl: 'confirma-deseja-novo-doc.html',
})
export class ConfirmaDesejaNovoDocPage {
  private data = null;
  private nextPage: Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.data = (this.navParams.get('data'));
    //HACK - setei um valor default apenas para não ocorrer erros no fluxo, mais deve ser informado a pagina seguinte
    this.nextPage = (this.navParams.get('nextPage') || HomePage);
  }

  goBack() {
    this.navCtrl.pop();
  }

  goAhead() {
    this.navCtrl.push(this.nextPage, { data: this.data });
  }

}
