import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}
