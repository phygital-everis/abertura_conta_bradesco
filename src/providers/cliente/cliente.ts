import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from "../../models/cliente.model";
/*
  Generated class for the ClienteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClienteProvider {

  public cliente = new Cliente()

  constructor(public http: HttpClient) {
    
  }

}
