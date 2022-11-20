import { Component } from "@angular/core";
import { Observable, Subject, switchMap } from "rxjs";
import { BBNewsService } from "../services/bb-news.service";

@Component({
  template: `
    <news-grid  *ngLet="{d: m_Approve$ | async, fn: m_FetchNews$ | async} as vm" 
                (m_ApproveEvent)="this.m_Approve$.next($event)">
    </news-grid>
  `
})
export class NewsDeclinedComponent {
  m_Approve$: Subject<number> = new Subject<number>().pipe(
    switchMap((id: number) => {
      return this.m_BBNewsService.patchNewsState(id, 'approve').pipe(
        switchMap(_ => this.m_BBNewsService.fetchNews('declined'))
      )
    })
  ) as Subject<number>;
  m_FetchNews$: Observable<any> = this.m_BBNewsService.fetchNews('declined');

  constructor(private m_BBNewsService: BBNewsService) { }

}