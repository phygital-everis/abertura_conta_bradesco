import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TakePicturePage } from '../take-picture/take-picture';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(
    public navCtrl: NavController
    ) {

     }
  

  

  joinChat() {
    this.navCtrl.push(TakePicturePage);
  }

}
