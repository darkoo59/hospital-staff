import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../../manager/model/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiHost + "api/doctor", {headers: this.headers});
  }

  getDoctor(doctorId: number): Observable<Doctor> {
    return this.http.get<Doctor>(this.apiHost + "api/doctor/"+doctorId, {headers: this.headers});
  }


}
