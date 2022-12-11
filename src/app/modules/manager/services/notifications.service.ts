import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Notifications } from '../model/notifications.model';
import { GenericDataService } from './generic-data.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService extends GenericDataService<Notifications[]> {

  constructor(private m_Http: HttpClient) {super()}

  fetchNotifications(): Observable<any> {
    this.clearError();
    return this.addErrorHandler(this.m_Http.get(`${environment.integrationApiUrl}/Notification`).pipe(
      tap((res: any) => {
        this.setData = res;
      })
    ));
  }

  remove(id: number) : Observable<any> {
    return this.m_Http.delete(`${environment.integrationApiUrl}/Notification/delete/`+id);
  }

}
