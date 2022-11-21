import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InpatientTreatment } from '../model/inpatient-treatment.model';

@Injectable({
  providedIn: 'root'
})
export class InpatientTreatmentService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getInpatientTreatments(): Observable<InpatientTreatment[]> {
    return this.http.get<InpatientTreatment[]>(this.apiHost + "api/inpatientTreatments", {headers: this.headers});
  }

  createInpatientTreatment(inpatientTreatment: InpatientTreatment): Observable<InpatientTreatment> {
    return this.http.post<InpatientTreatment>(this.apiHost + 'api/inpatientTreatments', inpatientTreatment, {headers: this.headers});
  }
}
