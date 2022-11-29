import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { BloodRequest } from "../model/blood-request.model";
import { GenericDataService } from "../../../services/generic-data.service";

@Injectable()
export class BloodReqService extends GenericDataService<BloodRequest[]> {

  constructor(private m_Http: HttpClient) { super() }

  fetchBloodRequests(type: 'new' | 'approved' | 'declined' | 'update'): Observable<any> {
    this.clearError();
    return this.addErrorHandler(this.m_Http.get(`${environment.integrationApiUrl}/BloodRequest/${type}`).pipe(
      tap((res: any) => {
        this.setData = res;
      })
    ));
  }

  patchBloodRequestState(id: number, type: 'approve' | 'decline'): Observable<any> {
    this.clearError();
    return this.addErrorHandler(this.m_Http.patch(`${environment.integrationApiUrl}/BloodRequest/${type}`, id));
  }

  requestAdjustment(id: number, reason: string): Observable<any> {
    return this.addErrorHandler(this.m_Http.patch(`${environment.integrationApiUrl}/BloodRequest/adjustment`, { id, reason }));
  }
}