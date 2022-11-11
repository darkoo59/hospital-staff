import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VacationRequest } from '../model/vacation-request';

@Injectable({
  providedIn: 'root'
})
export class VacationService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getDoctorVacationRequests(doctorId:number): Observable<VacationRequest[]> {
    return this.http.get<VacationRequest[]>(this.apiHost + "api/vacationRequest/doctorVacationRequests/" + doctorId, {headers: this.headers});
  }

  createVacationRequest(vacationRequest: any): Observable<any> {
    vacationRequest.startDate.setHours(1);
    vacationRequest.endDate.setHours(1);
    vacationRequest.Status = "OnHold";
    return this.http.post<any>(this.apiHost + 'api/vacationRequest', vacationRequest, {headers: this.headers});
  }

  deleteVacationRequest(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/vacationRequest/' + id, {headers: this.headers});
  }
}
