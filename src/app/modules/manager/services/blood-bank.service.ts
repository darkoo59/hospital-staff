import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { RegisterDTO } from "../dto/register.dto";

@Injectable({
  providedIn: 'root'
})
export class BloodBankService {

  constructor(private m_Http: HttpClient){}

  register(registerDTO: RegisterDTO): Observable<any>{
    return this.m_Http.post(`${environment.integrationApiUrl}/users`, registerDTO);
  }
}