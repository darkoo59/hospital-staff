import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { GenericDataService } from "../../../services/generic-data.service";
import { EqTender } from "../model/eq-tender.model";

@Injectable()
export class EqTenderService extends GenericDataService<EqTender[]> {

  constructor(private m_Http: HttpClient) { super() }

  fetchTenders(): Observable<any> {
    return this.addErrorReader(this.m_Http.get(`${environment.integrationApiUrl}/EquipmentTender`).pipe(
      tap((res:any) => this.setData = res)
    ));
  }

  fetchTenderWithApplications(id: number): Observable<any> {
    return this.m_Http.get(`${environment.integrationApiUrl}/EquipmentTender/application/tender/${id}`).pipe(tap(e => console.log(e)));
  }

  createTender(tender: EqTender): Observable<any> {
    return this.addErrorHandler(this.m_Http.post(`${environment.integrationApiUrl}/EquipmentTender`, tender));
  }

  chooseWinner(id: number): Observable<any> {
    return this.addErrorReader(this.m_Http.patch(`${environment.integrationApiUrl}/EquipmentTender/winner`, id));
  }
}