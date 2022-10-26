import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../model/appointment.model';



@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  delete(id: number) {
    throw new Error('Method not implemented.');
  }
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

  getFutureAppointments(doctorId:number): Observable<any[]> {
    return this.http.get<Appointment[]>(this.apiHost + "api/appointments/futureAppointments/" + doctorId, {headers: this.headers});
  }


  deleteAppointment(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/appointments/' + id, {headers: this.headers});
  }

  getAppointment(id: number): Observable<Appointment> {
    return this.http.get<Appointment>(this.apiHost + 'api/appointments/' + id, {headers: this.headers});
  }

  updateAppointment(appointment: any): Observable<any>{
 /*   alert(appointment.appointmentId)
    alert(appointment.patientId)
    alert(appointment.time)
    alert(appointment.date)
   */ 
    
    appointment.date.setHours(0);
    appointment.date.setMinutes(0);
    appointment.date.setSeconds(0);
    console.log(appointment.date);
    
  return this.http.put<any>(this.apiHost + 'api/appointments/' + appointment.appointmentId, appointment, {headers: this.headers});
 
    
  }


}
