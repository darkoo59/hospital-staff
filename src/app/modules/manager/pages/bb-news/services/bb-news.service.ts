import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, tap, take } from "rxjs";
import { environment } from "src/environments/environment";
import { BB_News } from "../../../model/bb-news.model";

@Injectable({
  providedIn: 'root'
})
export class BB_NewsService {
  private m_BBNewsSubject: BehaviorSubject<BB_News[]> = new BehaviorSubject<BB_News[]>([]);
  private m_ErrorsSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  public m_BBNews$: Observable<BB_News[]> = this.m_BBNewsSubject.asObservable();
  public m_Errors$: Observable<string[]> = this.m_ErrorsSubject.asObservable();

  set setBBNews(bb_news: BB_News[]) {
    this.m_BBNewsSubject.next(bb_news);
  }

  set setErrors(errors: string[]) {
    this.m_ErrorsSubject.next(errors);
  }

  constructor(private m_Http: HttpClient) { }

  fetchUncheckedNews(): void {
    this.m_Http.get(`${environment.integrationApiUrl}/BankNews/unchecked`).pipe(
      take(1),
      tap((res: any) => {
        this.setBBNews = res;
      })
    ).subscribe();
  }

  fetchApprovedNews(): void {
    this.m_Http.get(`${environment.integrationApiUrl}/BankNews/approved`).pipe(
      take(1),
      tap((res: any) => {
        this.setBBNews = res;
      })
    ).subscribe();
  }

  fetchDisapprovedNews(): void {
    this.m_Http.get(`${environment.integrationApiUrl}/BankNews/disapproved`).pipe(
      take(1),
      tap((res: any) => {
        this.setBBNews = res;
      })
    ).subscribe();
  }

  approveNews(id: number): Observable<any> {
    return this.m_Http.patch(`${environment.integrationApiUrl}/BankNews/approve`, id);
  }

  disapproveNews(id: number): Observable<any> {
    return this.m_Http.patch(`${environment.integrationApiUrl}/BankNews/disapprove`, id);
  }
}
