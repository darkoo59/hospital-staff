import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap, take } from "rxjs";
import { environment } from "src/environments/environment";
import { BBNews } from "../model/bb-news.model";
import { GenericDataService } from "../../../services/generic-data.service";

@Injectable()
export class BBNewsService extends GenericDataService<BBNews[]> {
  constructor(private m_Http: HttpClient) { super() }

  fetchNews(type: 'new' | 'approved' | 'declined'): Observable<any> {
    this.clearError();
    return this.addErrorHandler(this.m_Http.get(`${environment.integrationApiUrl}/BankNews/${type}`).pipe(
      tap((res: any) => {
        this.setData = res;
      })
    ));
  }

  patchNewsState(id: number, type: 'approve' | 'decline'): Observable<any> {
    this.clearError();
    return this.addErrorHandler(this.m_Http.patch(`${environment.integrationApiUrl}/BankNews/${type}`, id));
  }
}
