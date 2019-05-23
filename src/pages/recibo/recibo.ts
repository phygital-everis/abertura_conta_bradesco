import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { PrinterProvider } from './../../providers/printer/printer';
import { commands } from './../../providers/printer/printer-commands';


@Component({
  selector: 'page-recibo',
  templateUrl: 'recibo.html',
})
export class ReciboPage {
  receipt: any;
  inputData: any = {};

  commands = {
    LF: '\x0a',
    ESC: '\x1b',
    FS: '\x1c',
    GS: '\x1d',
    US: '\x1f',
    FF: '\x0c',
    DLE: '\x10',
    DC1: '\x11',
    DC4: '\x14',
    EOT: '\x04',
    NUL: '\x00',
    EOL: '\n',
    HORIZONTAL_LINE: {
      HR_58MM: '================================',
      HR2_58MM: '********************************'
    },
    FEED_CONTROL_SEQUENCES: {
      CTL_LF: '\x0a', // Print and line feed
      CTL_FF: '\x0c', // Form feed
      CTL_CR: '\x0d', // Carriage return
      CTL_HT: '\x09', // Horizontal tab
      CTL_VT: '\x0b', // Vertical tab
    },
    LINE_SPACING: {
      LS_DEFAULT: '\x1b\x32',
      LS_SET: '\x1b\x33'
    },
    HARDWARE: {
      HW_INIT: '\x1b\x40', // Clear data in buffer and reset modes
      HW_SELECT: '\x1b\x3d\x01', // Printer select
      HW_RESET: '\x1b\x3f\x0a\x00', // Reset printer hardware
    },
    CASH_DRAWER: {
      CD_KICK_2: '\x1b\x70\x00', // Sends a pulse to pin 2 []
      CD_KICK_5: '\x1b\x70\x01', // Sends a pulse to pin 5 []
    },
    MARGINS: {
      BOTTOM: '\x1b\x4f', // Fix bottom size
      LEFT: '\x1b\x6c', // Fix left size
      RIGHT: '\x1b\x51', // Fix right size
    },
    PAPER: {
      PAPER_FULL_CUT: '\x1d\x56\x00', // Full cut paper
      PAPER_PART_CUT: '\x1d\x56\x01', // Partial cut paper
      PAPER_CUT_A: '\x1d\x56\x41', // Partial cut paper
      PAPER_CUT_B: '\x1d\x56\x42', // Partial cut paper
    },
    TEXT_FORMAT: {
      TXT_NORMAL: '\x1b\x21\x00', // Normal text
      TXT_2HEIGHT: '\x1b\x21\x10', // Double height text
      TXT_2WIDTH: '\x1b\x21\x20', // Double width text
      TXT_4SQUARE: '\x1b\x21\x30', // Double width & height text
      TXT_CUSTOM_SIZE: function (width, height) { // other sizes
        var widthDec = (width - 1) * 16;
        var heightDec = height - 1;
        var sizeDec = widthDec + heightDec;
        return '\x1d\x21' + String.fromCharCode(sizeDec);
      },

      TXT_HEIGHT: {
        1: '\x00',
        2: '\x01',
        3: '\x02',
        4: '\x03',
        5: '\x04',
        6: '\x05',
        7: '\x06',
        8: '\x07'
      },
      TXT_WIDTH: {
        1: '\x00',
        2: '\x10',
        3: '\x20',
        4: '\x30',
        5: '\x40',
        6: '\x50',
        7: '\x60',
        8: '\x70'
      },

      TXT_UNDERL_OFF: '\x1b\x2d\x00', // Underline font OFF
      TXT_UNDERL_ON: '\x1b\x2d\x01', // Underline font 1-dot ON
      TXT_UNDERL2_ON: '\x1b\x2d\x02', // Underline font 2-dot ON
      TXT_BOLD_OFF: '\x1b\x45\x00', // Bold font OFF
      TXT_BOLD_ON: '\x1b\x45\x01', // Bold font ON
      TXT_ITALIC_OFF: '\x1b\x35', // Italic font ON
      TXT_ITALIC_ON: '\x1b\x34', // Italic font ON
      TXT_FONT_A: '\x1b\x4d\x00', // Font type A
      TXT_FONT_B: '\x1b\x4d\x01', // Font type B
      TXT_FONT_C: '\x1b\x4d\x02', // Font type C
      TXT_ALIGN_LT: '\x1b\x61\x00', // Left justification
      TXT_ALIGN_CT: '\x1b\x61\x01', // Centering
      TXT_ALIGN_RT: '\x1b\x61\x02', // Right justification
    }
  }
  
  constructor(
    public navCtrl: NavController,
    private printer: PrinterProvider,
    private alertCtrl: AlertController,
    private loadCtrl: LoadingController,
    private toastCtrl: ToastController,
  ) {
  }

  ionViewDidLoad() {
  }

 

  goNext() {
    this.navCtrl.push(HomePage)
  }

  showToast(data) {
    let toast = this.toastCtrl.create({
      duration: 3000,
      message: data,
      position: 'bottom',
    });
    toast.present();
  }

  
  print(device, data) {
    console.log('Device mac: ', device);
    console.log('Data: ', data);
    let load = this.loadCtrl.create({
      content: 'Printing...',
    });
    load.present();
    this.printer.connectBluetooth(device).subscribe(
      (status) => {
        console.log(status);
        this.printer
          .printData(data)
          .then((printStatus) => {
            console.log(printStatus);
            let alert = this.alertCtrl.create({
              title: 'Successful print!',
              buttons: [
                {
                  text: 'Ok',
                  handler: () => {
                    load.dismiss();
                    this.printer.disconnectBluetooth();
                  },
                },
              ],
            });
            alert.present();
          })
          .catch((error) => {
            console.log(error);
            let alert = this.alertCtrl.create({
              title: 'There was an error printing, please try again!',
              buttons: [
                {
                  text: 'Ok',
                  handler: () => {
                    load.dismiss();
                    //this.printer.disconnectBluetooth();
                  },
                },
              ],
            });
            alert.present();
          });
      },
      (error) => {
        console.log(error);
        let alert = this.alertCtrl.create({
          title:
            'There was an error connecting to the printer, please try again!',
          buttons: [
            {
              text: 'Ok',
              handler: () => {
                load.dismiss();
                //this.printer.disconnectBluetooth();
              },
            },
          ],
        });
        alert.present();
      },
    );
  }

  prepareToPrint() {

    let receipt = '';
    receipt += commands.HARDWARE.HW_INIT;
    receipt += commands.TEXT_FORMAT.TXT_4SQUARE;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_CT;
    receipt += 'BANCO BRADESCO';
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_NORMAL;
    receipt += commands.HORIZONTAL_LINE.HR_58MM;
    receipt += commands.EOL;
    receipt += commands.HORIZONTAL_LINE.HR2_58MM;
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
    receipt += 'Conta aberta com sucesso';
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_NORMAL;
    receipt += commands.HORIZONTAL_LINE.HR_58MM;
    receipt += commands.EOL;
    receipt += commands.HORIZONTAL_LINE.HR2_58MM;
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
    receipt += 'Agencia:2237';
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_NORMAL;
    receipt += commands.HORIZONTAL_LINE.HR_58MM;
    receipt += commands.EOL;
    receipt += commands.HORIZONTAL_LINE.HR2_58MM;
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
    receipt += 'Conta:010003444-9';
    //secure space on footer
    receipt += commands.EOL;
    receipt += commands.EOL;
    receipt += commands.EOL;
    
   
    this.mountAlertBt(receipt);
  }

  mountAlertBt(data) {
    this.receipt = data;
    let mockImpressao = '-- TESTE ---- TREINAMENTO ---- TESTE \n\n \
    Via do Cliente \n \n \
    &nbsp&nbsp Correspondente do Banco Bradesco S.A. \n \
    TDS Informatica - POS Teste OM-2 \n \
    R. Jose Horacio Meireles Teixeira 975 \n \
    Term.Net-Iso 00001711 &nbsp&nbsp Data 01/04/2019 \n \n \
    TESTE CABECALHO PARAMEtrIZADO \n \
    &nbsp&nbsp&nbsp BRADESCO EXPRESSO \n \n \
    Correspondente do Banco Bradesco \n \n \
    xxProposta de Pre-abertura de Contaxx \n \n \
    Ag. Relac. :03982 - AGENCIA TESTE 3982 \n \
    PACB &nbsp&nbsp&nbsp :300 - LJA 30008/2 \n \
    Agencia &nbsp&nbsp: 03982-AGENCIA TESTE 3982 \n \
    Conta &nbsp&nbsp&nbsp 0000000590110-3 \n \
    Nome &nbsp&nbsp&nbsp&nbsp : MARCOS DE OLIVEIRA \n \
    Data: &nbsp&nbsp&nbsp&nbsp : 01/04/2019 \n \
    Modalidade:00 \n \n \
    Tipo Pessoa: Fisica \n \
    Tipo Conta &nbsp :Conta Corrente \n \
    Cesta de Servicos: CESTA BRADESCO EXPRESSO 3 \n \n \
    Adesao ao Programa de Beneficios: N \n \n \
    MSU BANCO: 040001643788 \n \
    HORA &nbsp&nbsp&nbsp&nbsp&nbsp: 09:56:57 \n \n \
    &nbsp&nbsp Sujeito a Confirmacao do Banco \n \n \
    &nbsp&nbsp&nbsp&nbsp OUVIDORIA BRADESCO \n \
    &nbsp&nbsp&nbsp&nbsp&nbsp 0800 727 9933 \n \n \
    MSU Rede: 292936 &nbsp&nbsp Hora Rede: 09:56:50 \n \n \
    -------------------------------------------- \
    TESTE ---- TREINAMENTO ---- TESTE --';

    let alert = this.alertCtrl.create({
      title: 'Select your printer',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Select printer',
          handler: (device) => {
            if (!device) {
              this.showToast('Select a printer!');
              return false;
            }
            console.log(device);
            this.print(device, mockImpressao);
          },
        },
      ],
    });
    this.printer
      .enableBluetooth()
      .then(() => {
        this.printer
          .searchBluetooth()
          .then((devices) => {
            devices.forEach((device) => {
              console.log('Devices: ', JSON.stringify(device));
              alert.addInput({
                name: 'printer',
                value: device.address,
                label: device.name,
                type: 'radio',
              });
            });
            alert.present();
          })
          .catch((error) => {
            console.log(error);
            this.showToast(
              'There was an error connecting the printer, please try again!',
            );
            this.mountAlertBt(this.receipt);
          });
      })
      .catch((error) => {
        console.log(error);
        this.showToast('Error activating bluetooth, please try again!');
        this.mountAlertBt(this.receipt);
      });
  }


}
