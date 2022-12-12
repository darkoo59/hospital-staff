import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../model/appointment.model';
import { VacationRequest } from '../model/vacation-request';

@Injectable({
  providedIn: 'root'
})
export class VacationService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  urgentVacationRequest: VacationRequest = new VacationRequest();

  constructor(private http: HttpClient) { }

  getDoctorVacationRequests(doctorId:number): Observable<VacationRequest[]> {
    return this.http.get<VacationRequest[]>(this.apiHost + "api/vacationRequest/doctorVacationRequests/" + doctorId, {headers: this.headers});
  }

  createVacationRequest(vacationRequest: any): Observable<any> {
    vacationRequest.startDate.setHours(1);
    vacationRequest.endDate.setHours(1);
    vacationRequest.status = "OnHold";
    vacationRequest.urgency = "NoUrgent"
    return this.http.post<any>(this.apiHost + 'api/vacationRequest', vacationRequest, {headers: this.headers});
  }

  deleteVacationRequest(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/vacationRequest/' + id, {headers: this.headers});
  }

  GetAppointmentInVacationDataRange(doctorId:number,start:Date,end:Date): Observable<any>{
    return this.http.get<Appointment[]>(this.apiHost + "api/appointments/appointmentsInDataRange/" + doctorId, {headers: this.headers});
  }

  CreateUrgentRequest(int:number,start:Date,end:Date,vacationRequest:any):Observable<any>{
    vacationRequest.startDate.setHours(1);
    vacationRequest.endDate.setHours(1);
    vacationRequest.status = "OnHold";
    vacationRequest.urgency = "Urgent";
    return this.http.post<VacationRequest[]>(this.apiHost + "api/vacationRequest/createUrgentRequest",vacationRequest, {headers: this.headers});
  }
  
  getAllNotApprovedVacationRequests(): Observable<VacationRequest[]> {
    return this.http.get<VacationRequest[]>(this.apiHost + "api/vacationRequest/notApproved", {headers: this.headers});
  }

  approveVacationRequest(requestId: number): Observable<VacationRequest[]> {
    return this.http.put<VacationRequest[]>(this.apiHost + "api/vacationRequest/VacationApproveId/" + requestId, {headers: this.headers});
  }

  declineVacationRequest(requestId: number): Observable<VacationRequest[]> {
    return this.http.put<VacationRequest[]>(this.apiHost + "api/vacationRequest/VacationNotApproveId/" + requestId, {headers: this.headers});
  }

}
