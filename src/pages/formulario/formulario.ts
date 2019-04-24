import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CaptureCompEndPage } from "../capture-comp-end/capture-comp-end";
import { ClienteProvider } from "../../providers/cliente/cliente";

@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private cliente: ClienteProvider
  ) {
  }

  ionViewDidLoad() {
    let data = (this.navParams.get('data'));
    let tipoDoc = (this.navParams.get('tipo'));
    console.log('tipoDoc:', tipoDoc);

    let fields = [];
   
    for (let index = 0; index < data.responses[0].textAnnotations.length; index++) {
      fields.push(data.responses[0].textAnnotations[index].description)
    }

    if(tipoDoc === "CNH"){
      //Nome
      let nomeBegin = fields.indexOf("NOME") > 0 ? fields.indexOf("NOME") :
      fields.indexOf("WOME") > 0 ? fields.indexOf("WOME") : 
      fields.indexOf("HABILITACAO");
      
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

      //data nascimento
      let dtNascBegin = fields[cpfBegin] === "–" || fields[cpfBegin] === "-" ? cpfBegin + 9 : cpfBegin + 8;
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
      
      this.cliente.cliente.nomeCompleto = nomeCompleto;
      this.cliente.cliente.tipoDocumento = 'CNH';
      this.cliente.cliente.numeroDocumento = rg.replace(/[|(– -]/g, '').substring(0, 9);
      this.cliente.cliente.cpf = cpf.replace(/ /g, '').substring(0, 14);
      this.cliente.cliente.dataNascimento = dtNasc.replace(/[ -]/g, '').substring(0, 10);
    }
  }

  goNext(){
   
    this.navCtrl.push(CaptureCompEndPage)
  }

}
