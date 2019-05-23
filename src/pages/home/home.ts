import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalStorageProvider } from "../../providers/local-storage/local-storage";
import { AuthService } from '../../providers/firebase/auth';
import { ShellPage } from "../../pages/shell/shell";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
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
  
     authUser() {
      //this.navCtrl.push(ChooseServicesPage);
      //this.navCtrl.push(AccountTypePage);
      // this.navCtrl.push(ChooseServicesPage);
      this.navCtrl.push(ShellPage);
      if(1 == 1)
        return;
      if(!this.userCode) return this.loginError = 'Usuário não pode ser vazio';
      if(!this.userPass) return this.loginError = 'Senha não pode ser vazio';
  
      this.auth.signInWithEmail(this.userCode, this.userPass)
      .then(
        () => this.navCtrl.push(ShellPage),
        error => {
          this.loginError = 'Usuário ou senha inválidos';
          console.log(error);
        }
      )
    }

    ionViewDidLoad(){
      this.localstorage.clearAll()
    }

    joinChat() {
      this.navCtrl.push(ShellPage);
    }

}
