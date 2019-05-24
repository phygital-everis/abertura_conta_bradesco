import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Procurador} from "../../models/procurador.model";
/*
  Generated class for the ClienteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProcuradorProvider {

  public procurador = new Procurador();

  constructor(public http: HttpClient) {
    
  }

}
