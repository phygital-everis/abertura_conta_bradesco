import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Adicional} from "../../models/adicional.model";
/*
  Generated class for the ClienteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdicionalProvider {

  public adicional = new Adicional();

  constructor(public http: HttpClient) {
    
  }

}
