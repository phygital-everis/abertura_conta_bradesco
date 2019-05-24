import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CaptureProcuradorCompPage } from '../capture-procurador-comp/capture-procurador-comp';
import {ProcuradorProvider} from "../../providers/procurador/procurador";

@Component({
  selector: 'page-formulario-from-procurador',
  templateUrl: 'formulario-from-procurador.html',
})
export class FormularioFromProcuradorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  private procurador: ProcuradorProvider) {
  }

  ionViewDidLoad() {
    let data = (this.navParams.get('data'));
    let tipoDoc = (this.navParams.get('tipo'));
    console.log('tipoDoc:', tipoDoc);

    let fields = [];
   
    for (let index = 0; index < data.responses[0].textAnnotations.length; index++) {
      fields.push(data.responses[0].textAnnotations[index].description)
    }

    if(tipoDoc === "CNH") {
      //Nome
      let nomeBegin = fields.indexOf("NOME") > 0 ? fields.indexOf("NOME") :
      fields.indexOf("WOME") > 0 ? fields.indexOf("WOME") : 
      fields.indexOf("HABILITACAO") > 0 ? fields.indexOf("HABILITACAO") : fields.indexOf("HABILITAÇÃO");
      
      let nomeEnd = fields.indexOf("DOC") > 0 ? fields.indexOf("DOC") : fields.indexOf("BOC");
      let nomeCompleto = '';

      if(nomeBegin !== -1 && nomeEnd !== -1){
        for(let i=nomeBegin+1; i < nomeEnd-1; i++) {
          nomeCompleto += fields[i] + ' ';
        }
      }

      //RG
      let rgBegin = fields.indexOf("UF");
      let rgEnd = fields.indexOf("CPF", rgBegin) > 0 ? fields.indexOf("CPF", rgBegin) : fields.indexOf("DATA", rgBegin);
      let rg = '';

      if((rgBegin !== -1) && (rgEnd !== -1)){
        for(let i=rgBegin+1; i < rgEnd+1; i++) {
          rg += fields[i] + ' ';
        }
      }

      //CPF
      let cpfBegin = fields.indexOf("NASCIMENTO");
      let cpfEnd = fields.indexOf("|", cpfBegin) > 0 ? fields.indexOf("|", cpfBegin) : fields.indexOf("/", cpfBegin);
      let cpf = '';

      if((cpfBegin !== -1 && fields[cpfBegin-1] === "DATA") && cpfEnd !== -1){
        let add = fields[cpfBegin] === "–" || fields[cpfBegin] === "-" ? 2 : 1;
        for(let i=cpfBegin+add; i < cpfEnd+1; i++) {
          cpf += fields[i] + ' ';
        }
      }
      if(cpf.substring(0,1) == "-") {
        cpf = cpf.replace('-', '');
      } else if (cpf.substring(0,1) == "–") {
        cpf = cpf.replace('–', '');
      }

      //data nascimento
      let dtNascBegin = fields[cpfBegin] === "–" || fields[cpfBegin] === "-" ? cpfBegin + 9 : cpfBegin + 8;
      dtNascBegin = fields[dtNascBegin] === "|" ? dtNascBegin+1 : dtNascBegin;
      fields[dtNascBegin] = fields[dtNascBegin].length === 4 ? fields[dtNascBegin].substring(2, 4) : fields[dtNascBegin];

      let dtNascEnd = fields.indexOf("FILIAÇÃO") > 0 ? fields.indexOf("FILIAÇÃO") : 
      fields.indexOf("FILIACAO") > 0 ? fields.indexOf("FILIACAO") : fields.indexOf("FUAÇÃO");
      let dtNasc = '';
      
      if(dtNascBegin !== -1 && dtNascEnd !== -1){
        for(let i=dtNascBegin; i < dtNascEnd; i++) {
          dtNasc += fields[i] + ' ';
        }
      }

      //Filiacao -- TODO
      let filiacaoBegin = fields.indexOf("FILIAÇÃO") > 0 ? fields.indexOf("FILIAÇÃO") : 
      fields.indexOf("FILIACAO") > 0 ? fields.indexOf("FILIACAO") : fields.indexOf("FUAÇÃO");
      
      let filiacaoEnd = fields.indexOf("VÁLIDA") > 0 ? fields.indexOf("VÁLIDA") : 
      fields.indexOf("VALIDA") > 0 ? fields.indexOf("VALIDA") : 
      fields.indexOf("PERMISSÃO") > 0 ? fields.indexOf("PERMISSÃO") : fields.indexOf("PERMISSAO");
      let filiacao = '';

      if(filiacaoBegin !== -1 && filiacaoEnd !== -1){
        for(let i=filiacaoBegin+1; i < filiacaoEnd; i++) {
          filiacao += fields[i] + ' ';
        }
      }

      this.procurador.procurador.nomeCompleto = nomeCompleto;
      this.procurador.procurador.numeroDocumento = rg.replace(/[|(– -]/g, '').substring(0, 9);
      this.procurador.procurador.cpf = cpf.replace(/ /g, '').substring(0, 14);
      this.procurador.procurador.dataNascimento = dtNasc.replace(/[ -]/g, '').substring(0, 10);
    } else if(tipoDoc === "RG") {
      //RG
      let RGBegin = fields.indexOf("GERAL");
      
      let RGEnd = fields.indexOf("EXPEDIÇÃO") > 0 ? fields.indexOf("EXPEDIÇÃO") : fields.indexOf("EXPEDICAO");
      let rg = '';

      if(RGBegin !== -1 && RGEnd !== -1){
        let add = fields[RGEnd -1] === "via" ? 2 : 0;
        for(let i=RGBegin+1; i < RGEnd-add; i++) {
          rg += fields[i] + ' ';
        }
      }

      //Nome
      let nomeBegin = fields.indexOf("NOME") > 0 ? fields.indexOf("NOME") : fields.indexOf("WOME");
      
      let nomeEnd = fields.indexOf("FILIAÇÃO") > 0 ? fields.indexOf("FILIAÇÃO") : fields.indexOf("FILIACAO");
      let nomeCompleto = '';

      if(nomeBegin !== -1 && nomeEnd !== -1){
        for(let i=nomeBegin+1; i < nomeEnd; i++) {
          nomeCompleto += fields[i] + ' ';
        }
      }

      //Data Nascimento
      let dtNascBegin = fields.indexOf("-", fields.indexOf("NASCIMENTO"));
      
      let dtNascEnd = fields.indexOf("DOC", dtNascBegin);
      let dtNasc = '';

      if(dtNascBegin !== -1 && dtNascEnd !== -1){
        for(let i=dtNascBegin+2; i < dtNascEnd; i++) {
          dtNasc += fields[i] + ' ';
        }
      }

      //CPF
      let cpfBegin = fields.indexOf("CPF");
      
      let cpfEnd = cpfBegin+4;
      let cpf = '';

      if(cpfBegin !== -1 && cpfEnd !== -1){
        for(let i=cpfBegin+1; i < cpfEnd; i++) {
          cpf += fields[i] + ' ';
        }
      }

      this.procurador.procurador.nomeCompleto = nomeCompleto;
      this.procurador.procurador.numeroDocumento = rg.replace(/ /g, '');
      this.procurador.procurador.dataNascimento = dtNasc.replace(/ /g, '');
      this.procurador.procurador.cpf = cpf.replace(/ /g, '');

    }

  }

  goNext() {
    this.navCtrl.push(CaptureProcuradorCompPage);
  }

}
