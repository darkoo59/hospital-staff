import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ConfigurationDTO } from "../utility/configuration.dto";
import { RegisterDTO } from "../utility/register.dto";

@Injectable()
export class BloodBankService {

  constructor(private m_Http: HttpClient){}

  register(registerDTO: RegisterDTO): Observable<any>{
    return this.m_Http.post(`${environment.integrationApiUrl}/users`, registerDTO);
  }

  getAllBBanks(): Observable<any>{
    return this.m_Http.get(`${environment.integrationApiUrl}/users`);
  }

  getBBanksWithConfiguration(): Observable<any>{
    return this.m_Http.get(`${environment.integrationApiUrl}/reportconfiguration`);
  }

  update(configurationDTO: ConfigurationDTO): Observable<any>{
    return this.m_Http.post(`${environment.integrationApiUrl}/reportconfiguration`, configurationDTO);
  }
}
