import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FreeAppointmentRequestDTO } from '../model/free-appointment-request-dto';
import { MoveRequest } from '../model/move-request';
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

  getAllRooms(): Observable<RoomMap[]> {
    return this.http.get<RoomMap[]>(this.apiHost + 'api/rooms', {headers: this.headers});
  }

  getFreeTimeSlotForRooms(freeAppointmentRequestDTO:FreeAppointmentRequestDTO): Observable<Date[]> {
    return this.http.post<Date[]>(this.apiHost + 'api/rooms/freeAppointments', freeAppointmentRequestDTO, {headers: this.headers});
  }

  splitRoom(moveRequest:MoveRequest): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/rooms/renovationSplit', moveRequest, {headers: this.headers});
  }

  mergeRooms(moveRequest:MoveRequest): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/rooms/renovationMerge', moveRequest, {headers: this.headers});
  }

  getRequestsForRoom(roomId: number): Observable<MoveRequest[]> {
    return this.http.get<MoveRequest[]>(this.apiHost + 'api/rooms/viewRequests/' + roomId, {headers: this.headers});
  }

  cancelRequest(roomId: number): Observable<any> {
    return this.http.delete<any[]>(this.apiHost + 'api/rooms/viewRequests/' + roomId, {headers: this.headers});
  }

}
