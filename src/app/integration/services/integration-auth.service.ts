import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

export interface RegisterDTO {
  appName: string;
  email: string;
  server: string;
}

@Injectable({
  providedIn: 'root'
})
export class IntegrationAuthService {
  constructor(private http: HttpClient){}

  register(registerDTO: RegisterDTO): Observable<any>{
    return this.http.post(`${environment.integrationApiUrl}/users`, registerDTO);
  }
}
