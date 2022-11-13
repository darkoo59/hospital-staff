import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  BloodUsageEvidency} from '../model/blood-usage-evidency.model';


@Injectable({
  providedIn: 'root'
})
export class BloodUsageEvidencyService {
  
  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });


  constructor(private http: HttpClient) { }

  createBloodUsageEvidency(bloodUsageEvidency: any): Observable<any> {
    
    return this.http.post<any>(this.apiHost + 'api/bloodUsageEvidency',bloodUsageEvidency , {headers: this.headers});
  
  }
}    