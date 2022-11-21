import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blood } from '../model/blood.model';

@Injectable({
  providedIn: 'root'
})
export class BloodService {
  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }


  createBloodRequest(bloodRequest: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/bloodRequests', bloodRequest, {headers: this.headers});
  }

  getBloods(): Observable<Blood[]> {
    return this.http.get<Blood[]>(this.apiHost + 'api/bloods', {headers: this.headers});
  }
}
