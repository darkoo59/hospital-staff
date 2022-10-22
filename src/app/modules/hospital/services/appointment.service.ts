import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  
  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  createAppointment(appointment: any): Observable<any> {
    appointment.date.setHours(0);
    appointment.date.setMinutes(0);
    appointment.date.setSeconds(0);
    console.log(appointment.date);
    return this.http.post<any>(this.apiHost + 'api/appointments', appointment, {headers: this.headers});
  }
}
