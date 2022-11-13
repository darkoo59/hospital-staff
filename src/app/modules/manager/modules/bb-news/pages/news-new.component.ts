import { Component } from "@angular/core";
import { Observable, Subject, switchMap } from "rxjs";
import { BBNewsService } from "../services/bb-news.service";

@Component({
  template: `
    <news-grid  *ngLet="{a: m_Approve$ | async,  d: m_Decline$ | async, fn: m_FetchNews$ | async} as vm" 
                (m_ApproveEvent)="this.m_Approve$.next($event)"
                (m_DeclineEvent)="this.m_Decline$.next($event)">
    </news-grid>
  `
})
export class NewsNewComponent {
  m_Decline$: Subject<number> = new Subject<number>().pipe(
    switchMap((id: number) => {
      return this.m_BBNewsService.patchNewsState(id, 'decline').pipe(
        switchMap(_ => this.m_BBNewsService.fetchNews('new'))
      )
    })
  ) as Subject<number>;

  m_Approve$: Subject<number> = new Subject<number>().pipe(
    switchMap((id: number) => {
      return this.m_BBNewsService.patchNewsState(id, 'approve').pipe(
        switchMap(_ => this.m_BBNewsService.fetchNews('new'))
      )
    })
  ) as Subject<number>;
  m_FetchNews$: Observable<any> = this.m_BBNewsService.fetchNews('new');

  constructor(private m_BBNewsService: BBNewsService) { }
  
}