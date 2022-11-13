import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomMap } from '../model/room-map.model';

@Injectable({
  providedIn: 'root'
})
export class RoomMapService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getRoomsByBuildingFloor(buildingId: any, floor: any): Observable<RoomMap[]> {
    return this.http.get<RoomMap[]>(this.apiHost + 'api/roomsMap/' + buildingId + "/" + floor, {headers: this.headers});
  }

}
