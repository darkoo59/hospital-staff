import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, tap, take, catchError, EMPTY } from "rxjs";
import { environment } from "src/environments/environment";
import { BBNews } from "../../../model/bb-news.model";

@Injectable({
  providedIn: 'root'
})
export class BBNewsService {
  private m_BBNewsSubject: BehaviorSubject<BBNews[]> = new BehaviorSubject<BBNews[]>([]);
  private m_ErrorSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  public m_BBNews$: Observable<BBNews[]> = this.m_BBNewsSubject.asObservable();
  public m_Error$: Observable<string | null> = this.m_ErrorSubject.asObservable();

  set setBBNews(bb_news: BBNews[]) {
    this.m_BBNewsSubject.next(bb_news);
  }

  set setErrors(error: string | null) {
    this.m_ErrorSubject.next(error);
  }

  constructor(private m_Http: HttpClient) { }

  fetchNews(type: 'unchecked' | 'approved' | 'disapproved'): Observable<any> {
    this.setErrors = null;
    return this.m_Http.get(`${environment.integrationApiUrl}/BankNews/${type}`).pipe(
      take(1),
      tap((res: any) => {
        this.setBBNews = res;
      }),
      catchError(res => {
        console.log(res);
        const error = res.error;
        if(error && error.message){
          this.setErrors = error.message;
        }
        return EMPTY;
      })
    );
  }

  patchNewsState(id: number, type: 'approve' | 'disapprove'): Observable<any> {
    this.setErrors = null;
    return this.m_Http.patch(`${environment.integrationApiUrl}/BankNews/${type}`, id).pipe(
      catchError(res => {
        console.log(res);
        const error = res.error;
        if(error && error.message){
          this.setErrors = error.message;
        }
        return EMPTY;
      })
    );
  }
}
