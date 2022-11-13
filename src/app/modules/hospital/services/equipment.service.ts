import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipment } from '../model/equipment.model';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getEquipmentByRoomId(roomId: any): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(this.apiHost + 'api/rooms/equipment/' + roomId , {headers: this.headers});
  }

  getAllEquipment(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(this.apiHost + 'api/rooms/equipment', {headers: this.headers});
  }

}
