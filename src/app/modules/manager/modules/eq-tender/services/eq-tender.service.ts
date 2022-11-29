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
    return this.addErrorHandler(this.m_Http.get(`${environment.integrationApiUrl}/EquipmentTender`).pipe(
      tap((res:any) => {
        this.setData = res
      })
    ));
  }

  createTender(tender: EqTender): Observable<any> {
    return this.addErrorHandler(this.m_Http.post(`${environment.integrationApiUrl}/EquipmentTender`, tender));
  }
}