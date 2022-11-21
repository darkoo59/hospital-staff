import { Component } from "@angular/core";
import { Observable, Subject, switchMap } from "rxjs";
import { BBNewsService } from "../services/bb-news.service";

@Component({
  template: `
    <news-grid  *ngLet="{d: m_Decline$ | async, fn: m_FetchNews$ | async} as vm" 
                (m_DeclineEvent)="this.m_Decline$.next($event)">
    </news-grid>
  `
})
export class NewsApprovedComponent {
  m_Decline$: Subject<number> = new Subject<number>().pipe(
    switchMap((id: number) => {
      return this.m_BBNewsService.patchNewsState(id, 'decline').pipe(
        switchMap(_ => this.m_BBNewsService.fetchNews('approved'))
      )
    })
  ) as Subject<number>;
  m_FetchNews$: Observable<any> = this.m_BBNewsService.fetchNews('approved');

  constructor(private m_BBNewsService: BBNewsService) { }
  
}