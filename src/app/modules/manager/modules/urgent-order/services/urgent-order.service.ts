import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import { BloodBank } from '../model/blood-bank.model';

@Injectable({
  providedIn: 'root'
})
export class UrgentOrderService {

constructor(private http: HttpClient) { }

  public findAll() : Observable<BloodBank[]> {
    return this.http.get<BloodBank[]>(`${environment.integrationApiUrl}/Users`)
  } 

}


