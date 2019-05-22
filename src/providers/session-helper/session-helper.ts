import { LocalStorageProvider } from './../local-storage/local-storage';
import { Injectable } from "@angular/core";
import { SessionInfo } from "../../models/session.model";

@Injectable()
export class SessionHelper {
    constructor(private str: LocalStorageProvider) { }
    public createSession(cpf: string): void {
        let sessionInfo = new SessionInfo();
        sessionInfo.clientData.cpf = (cpf).replace(/\D/g, '');
        sessionStorage.setItem('sessionInfo', JSON.stringify(sessionInfo));
        this.str.addItem('sessionInfo', sessionInfo);
    }

    public destroySession() {
        sessionStorage.removeItem('sessionInfo');
        this.str.removeItem('sessionInfo');
    }

    public checkAlreadyInSession(cpf: string) {
        const sessionInfo = this.getSessionData();
        return (sessionInfo && sessionInfo.clientData && sessionInfo.clientData.cpf == (cpf).replace(/\D/g, ''))
            ? this.checkSessionIsValid() :
            true;
    }


    public checkSessionIsValid(): boolean {
        debugger;
        let sessionInfo = this.getSessionData();
        return sessionInfo && sessionInfo.edTm > 0 && sessionInfo.stTm > 0 && (sessionInfo.edTm - sessionInfo.stTm < (300 * 1000));
    }

    private getSessionData(): SessionInfo {
        let sessionInfo: SessionInfo = JSON.parse(sessionStorage.getItem('sessionInfo'));
        console.log(sessionInfo);
        return sessionInfo;
    }
}