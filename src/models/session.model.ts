import { Guid } from "guid-typescript";

import { Cliente } from './cliente.model';
export class SessionInfo {
    sessionId: Guid;
    clientData: Cliente = new Cliente();
    sessionCreateDate: Date;
    sessionExpiryDate: Date;
    stTm: number;
    edTm: number;
    currentStep: string;

    constructor() {
        this.sessionId = Guid.create();
        this.sessionCreateDate = new Date();
        this.stTm = this.sessionCreateDate.getTime();
        this.sessionExpiryDate = new Date(this.sessionCreateDate.getTime() + (5 * 60000));
        this.edTm = this.sessionExpiryDate.getTime();
    }
}