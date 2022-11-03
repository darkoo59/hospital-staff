import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, tap, take } from "rxjs";
import { environment } from "src/environments/environment";

export interface RegisterDTO {
  appName: string;
  email: string;
  server: string;
}

export interface BloodNews {

}

@Injectable({
  providedIn: 'root'
})
export class BloodBankService {
  private m_BloodNewsSubject: BehaviorSubject<BloodNews[]> = new BehaviorSubject<BloodNews[]>([]);
  public m_BloodNews$: Observable<BloodNews[]> = this.m_BloodNewsSubject.asObservable();

  constructor(private m_Http: HttpClient){
    this.fetchBloodNews().subscribe();
  }

  register(registerDTO: RegisterDTO): Observable<any>{
    return this.m_Http.post(`${environment.integrationApiUrl}/users`, registerDTO);
  }

  fetchBloodNews(): Observable<any>{
    return this.m_Http.get(`${environment.integrationApiUrl}/BankNews`).pipe(
      take(1),
      tap((res: any) => {
        console.log(res);
        this.setBloodNews = res;
      })
    );
  }

  set setBloodNews(bloodNews: BloodNews[]){
    this.m_BloodNewsSubject.next(bloodNews);
  }
}
