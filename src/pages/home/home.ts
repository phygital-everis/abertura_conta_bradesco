import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { ChatPage } from '../chat/chat';
//import { TakePicturePage } from '../take-picture/take-picture';
import { NicknamePage } from '../nickname/nickname';
import { LocalStorageProvider } from "../../providers/local-storage/local-storage";
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [LocalStorageProvider]
})
export class HomePage {
  userCode:string = '';
  userPass:string = '';
  loginError:string;


  constructor(
    public navCtrl: NavController, 
    private localstorage: LocalStorageProvider,
    private auth: AuthService
    ) {

     }
  

  ionViewDidLoad(){
    this.localstorage.clearAll()
  }

  joinChat() {
    this.navCtrl.push(NicknamePage);
  }
  
  authUser() {
    if(!this.userCode) return this.loginError = 'Usuário não pode ser vazio';
    if(!this.userPass) return this.loginError = 'Senha não pode ser vazio';
    
    this.auth.signInWithEmail(this.userCode, this.userPass)
    .then(
      () => this.navCtrl.push(NicknamePage),
      error => {
        this.loginError = 'Usuário ou senha inválidos';
        console.log(error);
      }
    )
  }

}
