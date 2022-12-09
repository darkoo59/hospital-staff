import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenericDataService } from '../../../services/generic-data.service';
import { SubscribeBbDTO } from '../model/subscribe-bb-dto';
import { UnsubscribedBb } from '../model/unsubscribed-bb';

@Injectable({
  providedIn: 'root'
})
export class MonthlyBloodSupplyService extends GenericDataService<UnsubscribedBb[]> {

  constructor(private m_Http: HttpClient) {super()}

  fetchSubscriptions(type: 'unsubscribed' | 'subscribed'): Observable<any> {
    this.clearError();
    return this.addErrorHandler(this.m_Http.get(`${environment.integrationApiUrl}/BloodSubscription/${type}`).pipe(
      tap((res: any) => {
        this.setData = res;
      })
    ));
  }

  patchSubscriptionState(id: number, type: 'unsubscribed' | 'subscribed'): Observable<any> {
    this.clearError();
    return this.addErrorHandler(this.m_Http.patch(`${environment.integrationApiUrl}/BloodSubscription/${type}`, id));
  }

  subscribeBb(dto: SubscribeBbDTO) : Observable<any> {
    return this.m_Http.post(`${environment.integrationApiUrl}/BloodSubscription/subscribe`, dto);
  }

  unsubscribeBb(bbId: number) : Observable<any> {
    return this.m_Http.delete(`${environment.integrationApiUrl}/BloodSubscription/unsubscribe/`+bbId);
  }


}
