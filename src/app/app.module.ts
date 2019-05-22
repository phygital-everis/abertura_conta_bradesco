import { NavHelper } from './../providers/nav-helper/nav-helper';
//modules
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPageModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { IonicStorageModule } from '@ionic/storage';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { Camera } from '@ionic-native/camera';
import { MediaCapture } from '@ionic-native/media-capture';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireStorageModule } from "angularfire2/Storage";
import { AuthService } from '../providers/firebase/auth';
import { AngularFireAuth } from '@angular/fire/auth';
import { firebaseConfig } from '../config';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

//pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TakePicturePage } from '../pages/take-picture/take-picture';
import { PlanosPage } from '../pages/planos/planos';
import { CustomPlanePage } from '../pages/custom-plane/custom-plane';
import { CaptureDocPage } from '../pages/capture-doc/capture-doc';
import { CaptureCompEndPage } from '../pages/capture-comp-end/capture-comp-end';
import { FormularioPage } from '../pages/formulario/formulario';
import { Formulario2Page } from '../pages/formulario2/formulario2';
import { Formulario3Page } from '../pages/formulario3/formulario3';
import { CadastraSenhaPage } from '../pages/cadastra-senha/cadastra-senha';
import { ConfirmaSenhaPage } from '../pages/confirma-senha/confirma-senha';
import { SmsConfirmPage } from '../pages/sms-confirm/sms-confirm';
import { ReciboPage } from "../pages/recibo/recibo";
import { MenuInicialPage } from "../pages/menu-inicial/menu-inicial";
import { CpfPage } from "../pages/cpf/cpf";
import { packageDetailsPage } from "../pages/package-details/package-details";
import { packageComparativePage } from "../pages/package-comparative/package-comparative";
import { DialogMenuPage } from "../pages/dialog-menu/dialog-menu";
import { ClientElegivelPage } from "../pages/client-elegivel/client-elegivel";
import { ClientNaoElegivelPage } from "../pages/client-nao-elegivel/client-nao-elegivel";
import { OperacaoCanceladaPage } from "../pages/operacao-cancelada/operacao-cancelada";
import { ModalConfirmPage } from "../pages/modal-confirm/modal-confirm";
import { PreApprovedCustomerPage } from "../pages/pre-approved-customer/pre-approved-customer"
import { PreApprovedCardPage } from "../pages/pre-approved-card/pre-approved-card";
import { AccountTypePage } from '../pages/account-type/account-type';
import { BasketOfServicesPage } from '../pages/basket-of-services/basket-of-services';
import { ChooseServicesPage } from '../pages/choose-services/choose-services';
import { ConfirmaDesejaNovoDocPage } from '../pages/confirma-deseja-novo-doc/confirma-deseja-novo-doc';
import { CreditCardPage } from '../pages/credit-card/credit-card';
import { ContratoEletronicoPage } from '../pages/contrato-eletronico/contrato-eletronico';

//providers
import { VisionProvider } from '../providers/vision/vision';
import { LocalStorageProvider } from '../providers/local-storage/local-storage';
import { HttpEvaProvider } from '../providers/http-eva/http-eva';
import { WatsonapiProvider } from '../providers/watsonapi/watsonapi';
import { BuscaCepProvider } from '../providers/busca-cep/busca-cep';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { ClienteProvider } from '../providers/cliente/cliente';
import { PrinterProvider } from '../providers/printer/printer';
import { ValidaCpfProvider } from '../providers/valida-cpf/valida-cpf';
import { SessionHelper } from '../providers/session-helper/session-helper';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TakePicturePage,
    PlanosPage,
    CustomPlanePage,
    FormularioPage,
    Formulario2Page,
    Formulario3Page,
    CaptureDocPage,
    CaptureCompEndPage,
    CadastraSenhaPage,
    ConfirmaSenhaPage,
    SmsConfirmPage,
    ReciboPage,
    MenuInicialPage,
    CpfPage,
    packageDetailsPage,
    packageComparativePage,
    DialogMenuPage,
    ClientElegivelPage,
    ClientNaoElegivelPage,
    OperacaoCanceladaPage,
    ModalConfirmPage,
    PreApprovedCustomerPage,
    PreApprovedCardPage,
    AccountTypePage,
    BasketOfServicesPage,
    ConfirmaDesejaNovoDocPage,
    CreditCardPage,
    ChooseServicesPage,
    ConfirmaDesejaNovoDocPage,
    ContratoEletronicoPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig.fire),
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      backButtonIcon: 'arrow-back',
      iconMode: 'md',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition',

    }),
    HttpClientModule,
    SocketIoModule.forRoot(config),
    IonicStorageModule.forRoot(),
    BrMaskerModule,
    IonicPageModule.forChild(HomePage),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TakePicturePage,
    PlanosPage,
    CustomPlanePage,
    FormularioPage,
    Formulario2Page,
    Formulario3Page,
    CaptureDocPage,
    CaptureCompEndPage,
    CadastraSenhaPage,
    ConfirmaSenhaPage,
    SmsConfirmPage,
    ReciboPage,
    MenuInicialPage,
    CpfPage,
    packageDetailsPage,
    packageComparativePage,
    DialogMenuPage,
    ClientElegivelPage,
    ClientNaoElegivelPage,
    OperacaoCanceladaPage,
    ModalConfirmPage,
    PreApprovedCustomerPage,
    PreApprovedCardPage,
    AccountTypePage,
    BasketOfServicesPage,
    ConfirmaDesejaNovoDocPage,
    CreditCardPage,
    ChooseServicesPage,
    ConfirmaDesejaNovoDocPage,
    ContratoEletronicoPage
  ],
  providers: [
    AuthService,
    AngularFireAuth,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    VisionProvider,
    Camera,
    LocalStorageProvider,
    HttpEvaProvider,
    WatsonapiProvider,
    BuscaCepProvider,
    MediaCapture,
    FirebaseServiceProvider,
    ClienteProvider,
    PrinterProvider,
    BluetoothSerial,
    ValidaCpfProvider,
    SessionHelper

  ]
})
export class AppModule { }
