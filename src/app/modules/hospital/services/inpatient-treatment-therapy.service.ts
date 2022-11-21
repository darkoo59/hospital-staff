import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InpatientTreatmentTherapy } from '../model/inpatient-treatment-therapy.model';

@Injectable({
  providedIn: 'root'
})
export class InpatientTreatmentTherapyService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getInpatientTreatmentTherapyByInpatientTreatmentId(id: number): Observable<InpatientTreatmentTherapy> {
    return this.http.get<InpatientTreatmentTherapy>(this.apiHost + 'api/inpatientTreatmentTherapy/' + id, {headers: this.headers});
  }

  updateInpatientTreatmentTherapy(inpatientTreatmentTherapy: InpatientTreatmentTherapy): Observable<InpatientTreatmentTherapy> {
    return this.http.put<InpatientTreatmentTherapy>(this.apiHost + 'api/inpatientTreatmentTherapy/' + inpatientTreatmentTherapy.inpatientTreatmentTherapyId, inpatientTreatmentTherapy, {headers: this.headers});
  }
}
