import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import { BloodBank } from '../model/blood-bank.model';
import { UrgentOrderDTO } from '../model/urgent-order-dto';

@Injectable({
  providedIn: 'root'
})
export class UrgentOrderService {

constructor(private http: HttpClient) { }

  public findAll() : Observable<BloodBank[]> {
    return this.http.get<BloodBank[]>(`${environment.integrationApiUrl}/Users`)
  } 

  public OrderUrgently(dto: UrgentOrderDTO) : Observable<boolean> {
    return this.http.patch<boolean>(`${environment.integrationApiUrl}/UrgentOrder`, dto);
  }

}


